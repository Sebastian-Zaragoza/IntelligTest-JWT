import mongoose, {Document, PopulatedDoc, Schema, Types} from "mongoose"
import {INotes} from "./notes";

export interface ITest extends Document {
    answers: string[]
    sentences: PopulatedDoc<INotes, Types.ObjectId>[]
    section: Types.ObjectId
}

export const TestSchema = new Schema({
    answers: [
        {
            type: String,
            required: true
        }
    ],
    sentences: [
        {
            type: Schema.Types.ObjectId,
            ref: "Notes",
            required: true
        }
    ],
    section: {
        type: Schema.Types.ObjectId,
        ref: "Section",
        required: true
    }
}, {timestamps: true})

export const Test = mongoose.model<ITest>("Test", TestSchema)
export default Test