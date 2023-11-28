import * as mongoose from 'mongoose';
import 'dotenv/config';

const { DB_URI, DB_AUTHSOURCE, DB_USERNAME, DB_PASSWORD, PORT, NODE_ENV } = process.env;
let URI = NODE_ENV === 'production' ? 'mongodb://host.docker.internal:27017/likely' : DB_URI;

export const connectDB = async () => {
    console.log(URI);
    try {
        await mongoose.connect(URI, {
            authSource: DB_AUTHSOURCE,
            user: DB_USERNAME,
            pass: DB_PASSWORD
        });
    } catch (error) {
        console.error(error);
    }
};
