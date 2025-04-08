import express from 'express';
import upload from '../utils/upload.js';  // updated upload.js
import { uploadImage } from '../controller/image-controller.js';

const router = express.Router();

// Route to upload image
router.post('/upload', upload.single('file'), uploadImage);

export default router;
