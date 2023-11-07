import { MongoClient } from 'mongodb';

let databaseConnection: any;

const username = encodeURIComponent('root');
const password = encodeURIComponent('root-pwd');

export const MongoConf = {
    connectToDb: (callBack: any) => {
        MongoClient.connect(`mongodb://${username}:${password}@localhost:27017/likely`,
            {authSource:'admin'})
            .then(client => {
                console.log('Connected to database 🗂️');
                databaseConnection = client.db('likely');
                return callBack();
            })
            .catch(error => {
                console.log('Unable to connect to the database', error);
                return callBack(error);
            });
    },
    getDb: () => databaseConnection
};