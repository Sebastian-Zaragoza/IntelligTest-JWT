import mongoose,{Document, Schema} from "mongoose"

export interface IUser extends Document{
    name: string,
    email: string,
    password: string,
    confirmPassword: boolean
}

export const UsersSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        lowercase: true,
        unique:true,
        trim: true
    },
    password:{
        type: String,
        required: true,
    },
    confirmPassword:{
        type: Boolean,
        default: false
    }
}, {timestamps:true})

export const User = mongoose.model<IUser>('User', UsersSchema)
export default User

