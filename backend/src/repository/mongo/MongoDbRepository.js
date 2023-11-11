import mongoose from 'mongoose';
import { SchemaHandler } from './SchemaHandler';
import moment from 'moment/moment';

export class MongoRepository {

    URI_SEPARATOR = '/';
    POST_MODEL = 'posts';

    postModel = mongoose.models.posts || mongoose.model(this.POST_MODEL, SchemaHandler.from(this.POST_MODEL));

    async updateLike(postSlug) {
        const updateOptions = { upsert: true, new: true, lean: true, projection: '-_id -createdAt -__v' };
        const updateQueryParams = {
            $inc: { likes: 1 },
            $set: { updatedAt: moment().format('MMMM Do YYYY, h:mm:ss a') }
        };
        const updateQuery = this.postModel.findOneAndUpdate(
            { slug: this.URI_SEPARATOR.concat(postSlug) },
            updateQueryParams,
            updateOptions
        );

        return await updateQuery.exec();
    }

}
