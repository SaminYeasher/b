import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv';

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const URL = `mongodb://${username}:${password}@blog-app-shard-00-00.srugn.mongodb.net:27017,blog-app-shard-00-01.srugn.mongodb.net:27017,blog-app-shard-00-02.srugn.mongodb.net:27017/?replicaSet=atlas-8unvhg-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=blog-app`;

const storage = multer.memoryStorage();

const upload = multer({ storage });
export default upload;
