import {Elysia} from 'elysia';
import {LikeService} from './service/LikeService.js';
import {MongoRepository} from './repository/MongoDbRepository.js';
import mongoose from 'mongoose';
import {connectDB} from './database/connectDB.js';

const app = new Elysia();
const likeService = new LikeService(new MongoRepository());

app.group('/likes', app => app

    .get('/find/:slug', ({params: {slug}}) => {
        console.log('params', slug);
        return likeService.findPostLikes(slug);
    })

    .post('/create', ({requestBody}) => {
        likeService.initializeLikeCount(requestBody);
    })

    .patch('/update', app => {

    })
);


connectDB();
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
    app.listen(process.env.PORT, () => {
        console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
    });
})




