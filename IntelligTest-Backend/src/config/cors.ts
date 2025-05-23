import {CorsOptions} from 'cors'

export const corsConfig: CorsOptions = {
    origin: (origin, callback) => {
        if(!origin) {
            return callback(null, true)
        }
        if (origin === process.env.FRONTEND_URL) {
            return callback(null, true)
        }
        callback(new Error(`Cors not found: ${origin}`))
    },
    credentials: true
}