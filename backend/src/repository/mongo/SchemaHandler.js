import { Schema } from 'mongoose';
import { _ } from 'lodash';
import moment from 'moment';

export class SchemaHandler {

    static from(schemaType) {
        return _.isEqual(schemaType, 'posts') && this.postSchema();
    }

    static postSchema() {
        return new Schema({
            slug: String,
            likes: { type: Number, default: 0 },
            createdAt: {
                type: String,
                default: moment().format('DD-MM-YYYY [-] HH:mm:ss')
            },
            updatedAt: String
        });
    }
}