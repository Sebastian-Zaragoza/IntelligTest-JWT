import mongoose,{Document, Schema, Types, PopulatedDoc} from "mongoose"
import {IUser} from "./users"
import {INotes} from "./notes"

export interface ISection extends Document {
    nameSection: string,
    descriptionSection: string,
    nameSubject: string,
    notes: PopulatedDoc<INotes, Types.ObjectId>[],
    owner: PopulatedDoc<IUser, Types.ObjectId>
}

export const SectionSchema = new Schema({
    nameSection:{
        type:String,
        required:true,
        trim:true
    },
    descriptionSection:{
        type:String,
        required:true,
        trim:true
    },
    nameSubject:{
        type:String,
        required:true,
        trim:true
    },
    notes:[
        {
            type: Schema.Types.ObjectId,
            ref: "Notes",
            default: []
        }
    ],
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {timestamps:true})

export const Section = mongoose.model<ISection>("Section", SectionSchema)
export default Section