import multer from 'multer';
import path from 'path';
import fs from 'fs';



const storageImg = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve('./uploads/')); // Define the upload directory
    },
    filename: (req, file, cb) => {
        let newFileName = `${Date.now()}${file.originalname}`;
        const originalFileName = `uploads/${newFileName}`;

        while (fs.existsSync(originalFileName)) {
            newFileName = `${Date.now()}${file.originalname}`;
            originalFileName = `uploads/${newFileName}`;
        }
        cb(null, newFileName);
    },
});

const fileFilterImg = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true); // Accept JPEG and PNG images
    } else {
        cb(null, false); // Reject other file types
    }
};



export const uploadProfileImage = multer({
    storage: storageImg,
    limits: {
        fileSize: 1024 * 1024 * 5, // 5 MB file size limit
    },
    fileFilter: fileFilterImg,
});

