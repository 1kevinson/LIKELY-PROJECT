//@ts-nocheck
import { Elysia } from 'elysia';
import { LikeService } from './service/LikeService';
import { MongoRepository } from './repository/MongoDbRepository';

const app = new Elysia();
const likeService = new LikeService(new MongoRepository());

app.group('/likes', app => app

    .get('/find', () => {
        return likeService.findPostLikes();
    })

    .post('/create', ({ requestBody }) => {
        likeService.initializeLikeCount(requestBody);
    })

    .patch('/update', app => {

    })
);


app.listen(3000, () => {
    console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
});


