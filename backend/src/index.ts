import {Elysia} from "elysia";
import {LikeService} from "./service/LikeService";

const app = new Elysia();
const likeService = new LikeService();

app.group('/likes', app => app

    .get('/find', () => {
        return likeService.findPostLikes()
    })

    .post('/create', app => {

    })

    .patch('/update', app => {

    })
)


app.listen(3000, () => {
    console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
})