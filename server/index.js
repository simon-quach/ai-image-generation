import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js' // connects connect.js from mongodb folder
import postRoutes from './routes/postRoutes.js' // connects postRoutes.js from routes folder
import dalleRoutes from './routes/dalleRoutes.js' // connects dalleRoutes.js from routes folder

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', async (req, res) => {
  res.send('Hello from DALL-E!');
})

const startServer = async () => { // starts the server
  try {
    connectDB(process.env.MONGODB_URL); // connects to MongoDB database with url
    app.listen(8080, () => console.log('Server has started on port http://localhost:8080'))
  } catch (err) {
    console.log(err);
  }
}

startServer();