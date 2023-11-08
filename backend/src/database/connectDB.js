import * as mongoose from 'mongoose';
import 'dotenv/config'

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI, {
            authSource: 'admin',
            user: process.env.DATABASE_USERNAME,
            pass: process.env.DATABASE_PASSWORD
        });
    } catch (error) {
        console.error(error);
    }
};