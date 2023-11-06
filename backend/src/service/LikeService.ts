import {LikeRepository} from "../repository/LikeRepository";
import {PostLike} from "../model/PostLike";

export class LikeService {

    likeRepository: LikeRepository;

    constructor() {
        this.likeRepository = new LikeRepository();
    }

    initializeLikeCount(postLike: PostLike) {
        this.likeRepository.createLike(postLike);
    }

    findPostLikes(): string {
        console.log('enter into service')
        return 'Hello this is your likes => ' + 250;
    }
}


