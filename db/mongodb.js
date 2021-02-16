import mongoose from 'mongoose';
import Submission from './schema';

const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

if (!dbName) {
  throw new Error('Please define the MONGODB_DB environment variable inside .env.local');
}

mongoose.connect(`${uri}${dbName}`, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error: '));
db.once('open', () => console.log('*** Database Connected ***'));

export default Submission;
