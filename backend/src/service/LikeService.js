export class LikeService {

    repository;

    constructor(repository) {
        this.repository = repository;
    }

    findPostLikes(postSlug) {
        return this.repository.findLike(postSlug)
    }

    updateLikes(postSlug) {
        return this.repository.updateLike(postSlug)
    }
}


