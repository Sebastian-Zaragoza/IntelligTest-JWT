import {z} from 'zod'

export const authSchema = z.object({
    name:z.string(),
    email:z.string().email(),
    password:z.string(),
    confirmPassword:z.string(),
    token:z.string()
})
type Auth = z.infer<typeof authSchema>
export type UserLoginForm = Pick<Auth, 'email' | 'password'>
export type UserRegisterForm = Pick<Auth, 'name'| 'email' | 'password'| 'confirmPassword'>
export type ConfirmToken = Pick<Auth, 'token'>