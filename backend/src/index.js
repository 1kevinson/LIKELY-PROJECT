import { Elysia } from 'elysia';
import mongoose from 'mongoose';
import { swagger } from '@elysiajs/swagger';
import { connectDB } from './database/connectDB.js';
import { LikeService } from './service/LikeService.js';
import { MongoRepository } from './repository/mongo/MongoDbRepository';

const app = new Elysia();
const likeService = new LikeService(new MongoRepository());

app.use(swagger())
    .patch('/likes/update/:slug', ({ params: { slug } }) => likeService.updateLikes(slug));


connectDB();
mongoose.connection.once('open', () => {
    console.log('🌿 connected to mongodb');
    app.listen(process.env.PORT, () => {
        console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
    });
});




