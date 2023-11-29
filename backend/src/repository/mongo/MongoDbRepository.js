import mongoose from 'mongoose';
import { SchemaHandler } from './SchemaHandler';
import moment from 'moment/moment';
import { Logger } from '../../helpers/Logger';

export class MongoRepository {

    URI_SEPARATOR = '/';
    POST_MODEL = 'posts';

    postModel = mongoose.models.posts || mongoose.model(this.POST_MODEL, SchemaHandler.from(this.POST_MODEL));

    async findLike(postSlug) {
        const getQuery = this.postModel.findOne({ slug: this.URI_SEPARATOR.concat(postSlug) });
        const queryResponse = await getQuery.exec();
        Logger.info({method: 'GET', ...queryResponse});

        return queryResponse;
    }

    async updateLike(postSlug) {
        const updateOptions = { upsert: true, new: true, lean: true, projection: '-_id -createdAt -__v' };
        const updateQueryParams = {
            $inc: { likes: 1 },
            $set: { updatedAt: moment().format('DD-MM-YYYY [-] HH:mm:ss') }
        };
        const updateQuery = this.postModel.findOneAndUpdate(
            { slug: this.URI_SEPARATOR.concat(postSlug) },
            updateQueryParams,
            updateOptions
        );

        const queryResponse = await updateQuery.exec();
        Logger.info({method: 'PATCH', queryResponse});

        return queryResponse;
    }

}
