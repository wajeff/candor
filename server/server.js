import express from 'express';
import {MongoClient} from 'mongodb'
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '../.env') });
console.log('Current working directory:', process.cwd());
console.log('Resolved path to .env:', path.resolve(process.cwd(), '../.env'));


const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true }))


const uri = process.env.MONGODB_URI
console.log('MONGODB_URI:', process.env.MONGODB_URI);
let db;

async function startServer() {
  try{
    const client = await MongoClient.connect(uri);
    console.log('Connected to MongoDB Atlas');

    db = client.db('personal');

    app.get('/', (req, res) => {
      res.send('Hello from Express!');
    });
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (err) {
  console.error('MongoDB connection failed:', err);
}

}

startServer();


