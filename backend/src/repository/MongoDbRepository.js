import mongoose from "mongoose";

export class MongoRepository {

    postModel = mongoose.models.posts || mongoose.model("posts", {});

    createLike(post) {
        console.log('create in repository');
    }

    updateLike(post, slug) {
    }

    async findLike(postSlug) {
        const excludedFields = '-_id -slug -createdAt -updatedAt';
        const queryResult = await this.postModel.find(
            {slug: "/".concat(postSlug)}, excludedFields
        ).exec();
        console.info(queryResult);
        return queryResult;
    }

}
