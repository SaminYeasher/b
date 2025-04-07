import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv';

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const storage = new GridFsStorage({
    url: `mongodb://${username}:${password}@blog-app-shard-00-00.srugn.mongodb.net:27017,blog-app-shard-00-01.srugn.mongodb.net:27017,blog-app-shard-00-02.srugn.mongodb.net:27017/?replicaSet=atlas-8unvhg-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=blog-app`,
    file: (request, file) => {
        const match = ["image/png", "image/jpg", "image/jpeg"];

        if (match.indexOf(file.mimetype) === -1) {
            return `${Date.now()}-blog-${file.originalname}`;
        }

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        };
    }
});

export default multer({ storage });
