import mongoose from 'mongoose';

const url = process.env.RENDER || process.env.NODE_ENV === 'production' ? 'https://storyflowblog.onrender.com' : 'http://localhost:8000';

export const uploadImage = (req, res) => {
    if (!req.file) {
        return res.status(404).json("File not found");
    }
    
    const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
        bucketName: 'photos'
    });

    const filename = `${Date.now()}-blog-${req.file.originalname}`;
    const uploadStream = bucket.openUploadStream(filename, {
        contentType: req.file.mimetype
    });

    uploadStream.end(req.file.buffer);

    uploadStream.on('finish', () => {
        const imageUrl = `${url}/file/${filename}`;
        res.status(200).json({ imageUrl });
    });

    uploadStream.on('error', (error) => {
        res.status(500).json({ msg: error.message });
    });
};

export const getImage = async (request, response) => {
    try {
        const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
            bucketName: 'photos'
        });
        
        const files = await bucket.find({ filename: request.params.filename }).toArray();
        if (!files || files.length === 0) {
            return response.status(404).json("File not found");
        }

        const readStream = bucket.openDownloadStreamByName(request.params.filename);
        readStream.pipe(response);
    } catch (error) {
        response.status(500).json({ msg: error.message });
    }
};
