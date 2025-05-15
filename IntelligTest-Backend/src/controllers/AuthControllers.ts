import {Response, Request} from "express";
import User from "../models/users";
import {hashPassword} from "../utils/auth";
import {generateToken} from "../utils/token";
import Token from "../models/token";
import {AuthEmails} from "../emails/AuthEmail";


export class AuthController {
    static createAccount = async (req: Request, res: Response) => {
        try{
            const {email} = req.body
            const userExists = await User.findOne({email})
            if (userExists) {
                const error = new Error('User already exists')
                res.status(400).json({errors: error.message})
            }
            const user = new User(req.body)
            user.password = await hashPassword(req.body.password)
            const token = new Token()
            token.token = generateToken()
            token.user = user.id

            AuthEmails.sendConfirmationEmail({
                email: user.email,
                name: user.name,
                token: token.token
            })

            await Promise.allSettled([user.save(), token.save()])
            res.send('Account created successfully. Access your email and confirm your account')

        }catch (errors){
            res.status(400).send({errors: errors.message});
        }
    }
}