export class LikeService {

    repository;

    constructor(repository) {
        this.repository = repository;
    }

    initializeLikeCount(postLike) {
        this.repository.createLike(postLike);
    }

    findPostLikes(postSlug) {
        return this.repository.findLike(postSlug)
    }
}


