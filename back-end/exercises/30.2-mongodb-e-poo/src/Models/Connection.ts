import mongoose from 'mongoose';

const connection = (
  mongoDatabaseURI = process.env.MONGO_URI
    || 'mongodb://root:example@localhost:27017/TrybeStore?authSource=admin',
  ) => mongoose.connect(mongoDatabaseURI);

export default connection;
