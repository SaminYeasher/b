import multer from 'multer';
import path from 'path';

// Define storage for images
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');  // Save to 'uploads' folder
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);  // Unique filename
    }
});

// File filter - allow only images
const fileFilter = (req, file, cb) => {
    const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only JPEG, PNG, JPG are allowed.'), false);
    }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

export default upload;
