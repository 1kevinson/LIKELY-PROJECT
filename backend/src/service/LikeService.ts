//@ts-nocheck
import { LikeRepository } from '../repository/LikeRepository';

export class LikeService {

    likeRepository: LikeRepository;

    constructor(likeRepository: LikeRepository) {
        this.likeRepository = likeRepository;
    }

    initializeLikeCount(postLike) {
        this.likeRepository.createLike(postLike);
    }

    findPostLikes(): string {
        console.log('enter into service!');
        return this.likeRepository.findLike()
    }
}


