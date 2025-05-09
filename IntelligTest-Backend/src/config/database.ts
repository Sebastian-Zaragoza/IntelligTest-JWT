import mongoose from "mongoose"

export const connectiontodatabase = async () => {
    const connection = await mongoose.connect(process.env.DATABASE_URL)
    try{
        const url = `${connection.connection.host}:${connection.connection.port}`
        console.log("Connection successfully",url)
    }catch(error){
        console.error("Error connecting to database", error)
    }
}