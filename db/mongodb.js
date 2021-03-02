import mongoose from 'mongoose';

async function dbConnect() {
  const uri = process.env.MONGODB_URI;

  const connect = mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'Connection Error: '));
  db.once('open', () => console.log('*** Database Connected ***'));

  return connect;
}

export default dbConnect;
