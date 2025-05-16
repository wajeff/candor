import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


dotenv.config({ path: resolve(__dirname, '../.env') });

const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true }));


const uri = process.env.MONGODB_URI;
console.log('MONGODB_URI:', uri); 

let db;

async function startServer() {
  try {
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
    console.error('MongoDB connection failed:', err.message);
  }
}

startServer();
