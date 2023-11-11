import * as mongoose from 'mongoose';
import 'dotenv/config'

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {
            authSource: process.env.DB_AUTHSOURCE,
            user: process.env.DB_USERNAME,
            pass: process.env.DB_PASSWORD
        });
    } catch (error) {
        console.error(error);
    }
};