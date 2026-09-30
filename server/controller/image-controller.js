import gridfsStream from 'gridfs-stream';
import mongoose from 'mongoose';

const isProduction = process.env.NODE_ENV === 'production'; 
const url = isProduction ? 'https://storyflowblog.onrender.com' : 'http://localhost:8000';

let gfs, gridfsBucket;
const conn = mongoose.connection;
conn.once('open', () => {
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'photos'
    });
    gfs = gridfsStream(conn.db, mongoose.mongo);
    gfs.collection('photos');
});

export const uploadImage = (req, res) => {
    if (!req.file) {
        return res.status(404).json("File not found");
    }
    const imageUrl = `${url}/file/${req.file.filename}`;
    res.status(200).json({ imageUrl });
};

export const getImage = async (request, response) => {
    try {
        const file = await gfs.files.findOne({ filename: request.params.filename });
        if (!file) {
            return response.status(404).json("File not found");
        }
        
        // Wait, since we used bucketName "photos" in upload.js, let's use the standard way:
        const bucket = new mongoose.mongo.GridFSBucket(conn.db, {
            bucketName: 'photos'
        });
        const readStream = bucket.openDownloadStreamByName(file.filename);
        readStream.pipe(response);
    } catch (error) {
        response.status(500).json({ msg: error.message });
    }
};
