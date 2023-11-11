export class LikeService {

    repository;

    constructor(repository) {
        this.repository = repository;
    }

    updateLikes(postSlug) {
        return this.repository.updateLike(postSlug)
    }
}


