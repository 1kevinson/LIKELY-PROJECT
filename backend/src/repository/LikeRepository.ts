import {PostLike} from "../model/PostLike";

export class LikeRepository {

    createLike(post: PostLike): void {}

    updateLike(post: PostLike, slug: string): void  {}

    findLike(slug: string) : PostLike[]  {
        return []
    }

}
