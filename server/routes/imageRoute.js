import express from 'express';
import upload from '../utils/upload.js';
import { uploadImage, getImage } from '../controller/image-controller.js';

const router = express.Router();

// Route to upload image
router.post('/upload', upload.single('file'), uploadImage);
router.get('/file/:filename', getImage);

export default router;
