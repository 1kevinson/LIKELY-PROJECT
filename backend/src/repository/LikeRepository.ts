//@ts-nocheck
import { PostLike } from '../model/PostLike';

export interface LikeRepository {

    createLike(post: PostLike): void;

    updateLike(post: PostLike, slug: string): void;

    findLike(slug: string): any;

}
