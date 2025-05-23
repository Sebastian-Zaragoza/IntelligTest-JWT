import {Response, Request} from "express";
import User, {IUser} from "../models/users";
import {checkPassword, hashPassword} from "../utils/auth";
import {generateToken} from "../utils/token";
import Token, {IToken} from "../models/token";
import {AuthEmails} from "../emails/AuthEmail";

type sendEmailProps = {
    user: IUser
    token: IToken
}

function sendEmail({user, token}: sendEmailProps){
    AuthEmails.sendConfirmationEmail({
        email: user.email,
        name: user.name,
        token: token.token
    })
}

function resendEmail({user, token}: sendEmailProps){
    AuthEmails.sendPasswordResetToken({
        email: user.email,
        name: user.name,
        token: token.token
    })
}

export class AuthController {
    static createAccount = async (req: Request, res: Response) => {
        try {
            const { confirmPassword, ...userData } = req.body;
            const { email } = userData;
            const userExists = await User.findOne({ email });
            if (userExists) {
                res.status(409).json({ errors: "User already exists" });
            }

            const user = new User(userData);
            user.password = await hashPassword(req.body.password);
            const token = new Token({
                token: generateToken(),
                user: user.id,
            });
            sendEmail({ user, token });
            await Promise.allSettled([user.save(), token.save()])

            res.send("Account created. Check your email");
        }catch(error){
            res.status(500).json({error: 'Error occurred'})
        }
    }


    static confirmAccount = async (req: Request, res: Response) => {
        try {
            const {token} = req.body
            const tokenExist = await Token.findOne({token})
            if (!tokenExist) {
                const error = new Error('Invalid token')
                res.status(404).json({error: error.message})
            }
            const user = await User.findById(tokenExist.user)
            user.confirmPassword = true
            await Promise.allSettled([user.save(), tokenExist.deleteOne()])
            res.send('Account confirmed')

        }catch(error){
            res.status(500).json({error: 'Error occurred'})
        }
    }

    static loginAccount = async (req: Request, res: Response) => {
        try {
            const {email, password} = req.body
            const user = await User.findOne({email})
            if(!user) {
                const error = new Error('User not found')
                res.status(404).json({error: error.message})
            }
            if(!user.confirmPassword){
                const token = new Token()
                token.token = generateToken()
                token.user = user.id
                await token.save()
                sendEmail({user, token})

                const error = new Error('Account have not been confirmed. We have sent other to your e-mail to confirm it')
                res.status(404).json({error: error.message})
            }

            const passwordValid = await checkPassword(password, user.password)
            if (!passwordValid) {
                const error = new Error('Invalid password')
                res.status(401).json({error: error.message})
            }

            res.send(`Welcome ${user.name}`)
        }catch(error){
            res.status(500).json({error: "Error occurred"})
        }
    }

    static requestToken = async (req: Request, res: Response) => {
        try{
            const {email} = req.body
            const user = await User.findOne({email})
            if(!user) {
                const error = new Error('User not found')
                res.status(404).json({error: error.message})
            }
            if (user.confirmPassword){
                const error = new Error('User has been confirmed')
                res.status(403).json({error: error.message})
            }

            const token = new Token()
            token.token = generateToken()
            token.user = user.id
            sendEmail({user, token})

            await token.save()
            res.send('New token has been sent to your e-mail')

        }catch(error){
            res.status(500).json({error: "Error occurred"})
        }
    }

    static forgetPassword = async (req: Request, res: Response) => {
        try {
            const {email} = req.body
            const user = await User.findOne({email})
            if (!user) {
                const error = new Error('User not found')
                res.status(404).json({error: error.message})
            }
            if(!user.confirmPassword){
                const error = new Error('User has not been confirmed')
                res.status(404).json({error: error.message})
            }

            const token = new Token()
            token.token = generateToken()
            token.user = user.id
            await token.save()
            resendEmail({user, token})

            res.send('Check your e-mail to reset your password')

        }catch(error){
            res.status(500).json({error: 'Error occurred'})
        }
    }

    static validateToken = async (req: Request, res: Response) => {
        try {
            const {token} = req.body
            const tokenExist = await Token.findOne({token})
            if (!tokenExist) {
                const error = new Error('Token not found')
                res.status(404).json({error: error.message})
            }
            res.send('Token has been verified')
        }catch(error){
            res.status(500).json({error: 'Error occurred'})
        }
    }

    static updatePassword = async (req: Request, res: Response) => {
        try{
            const {token} = req.params
            const tokenExist = await Token.findOne({token})
            if (!tokenExist) {
                const error = new Error('Token not found')
                res.status(404).json({error: error.message})
            }
            const user = await User.findOne({token})
            user.password = await hashPassword(req.body.password)

            await Promise.allSettled([user.save(), tokenExist.deleteOne()])
            res.send('Password has been updated')
        }catch(error){
            res.status(500).json({error: 'Error occurred'})
        }
    }
}