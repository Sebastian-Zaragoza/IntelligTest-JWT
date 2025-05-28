import jwt from 'jsonwebtoken'
import {Types} from "mongoose";

type generateJWTProps = {
    payload: Types.ObjectId
}

export const generateJWT = (payload: generateJWTProps) => {
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
        expiresIn: '180d'
    })
    return token
}