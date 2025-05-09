import mongoose,{Document,Schema,Types} from "mongoose"

export interface INotes extends Document {
    fulltext: string,
    sentences: string[],
    section: Types.ObjectId
}

export const NotesSchema = new Schema({
    fulltext: {
        type: String,
    },
    sentences: [
        {
            type: String,
            required: true
        }
    ],
    section: {
        type: Schema.Types.ObjectId,
        ref: "Section",
        required: true
    }
}, {timestamps: true})

export const Notes = mongoose.model<INotes>('Notes', NotesSchema)
export default Notes
