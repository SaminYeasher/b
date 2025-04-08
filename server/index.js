import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import path from 'path';

import Connection from './database/db.js';
import Router from './routes/route.js';

import imageRoute from './routes/imageRoute.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);
app.use('/', imageRoute);

app.use('/uploads', express.static(path.join(path.resolve(), 'uploads')));


const PORT = process.env.PORT || 8000;;

app.listen(PORT, () => console.log(`server is running on successfully on PORT ${PORT}`)); 

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const MONGODB_URI = `mongodb://${username}:${password}@blog-app-shard-00-00.srugn.mongodb.net:27017,blog-app-shard-00-01.srugn.mongodb.net:27017,blog-app-shard-00-02.srugn.mongodb.net:27017/?replicaSet=atlas-8unvhg-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=blog-app`;

mongoose.connect(MONGODB_URI);


Connection(username,password);