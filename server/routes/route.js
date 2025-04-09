import express from 'express';

import { createPost ,getAllPosts, getPost } from '../controller/post-controller.js';
import { signupUser, loginUser} from '../controller/user-controller.js';
import { authenticateToken } from '../controller/jwt-controller.js';


import { uploadImage } from '../controller/image-controller.js';

import upload from '../utils/upload.js'

const router = express.Router();

router.post('/signup', signupUser);
router.post('/login', loginUser);

router.post('/upload', upload.single('file'), uploadImage);

router.post('/create', authenticateToken, createPost);

router.get('/post/:id', authenticateToken, getPost);
router.get('/posts', authenticateToken, getAllPosts);
    

export default router;