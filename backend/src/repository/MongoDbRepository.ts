//@ts-nocheck
import { PostLike } from '../model/PostLike';
import { MongoConf } from '../database/Database';
import { LikeRepository } from './LikeRepository';

export class MongoRepository implements LikeRepository {

    static {
        MongoConf.connectToDb((error) => {
            if (error) throw new Error('Unable to connect to the database');
        });
    }

    createLike(post): void {
        this.database().collection('post').insertOne(post, (error, response) => {
            if (error) throw new Error(error);
            console.log('document inserted', response);
        });
    }

    updateLike(post: PostLike, slug: string): void {
    }

    findLike() {
        const posts = this.database().collection('post').find().toArray()
            .then(res => {
                console.log(res);}        );
        console.log('posts', posts);
        return posts;
    }

    private database() {
        return MongoConf.getDb();
    }
}
