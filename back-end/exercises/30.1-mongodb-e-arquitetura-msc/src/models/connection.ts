import mongoose from 'mongoose';

const connection = (mongoDatabaseURI = 'mongodb://localhost:/world_cups') => mongoose.connect(mongoDatabaseURI);

export default connection;

/* connection from course's answer
import { connect } from 'mongoose';

const connection = (uri: string) => {
  try {
    connect(uri);
    console.log(`Conectado ao mongodb em: ${uri}`);
  } catch (error) {
    console.log(error);
  }
};

export default connection; */