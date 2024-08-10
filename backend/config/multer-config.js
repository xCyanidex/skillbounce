import multer from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const storageImg = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve('./uploads/'));
    },
    filename: (req, file, cb) => {
        const fileExtension = path.extname(file.originalname);
        const fileName = `${uuidv4()}${fileExtension}`;
        cb(null, fileName);
    },
});

const fileFilterImg = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(new Error('Only JPEG and PNG images are allowed'), false);
    }
};

export const uploadProfileImage = multer({
    storage: storageImg,
    limits: {
        fileSize: 1024 * 1024 * 5, // 5 MB file size limit
    },
    fileFilter: fileFilterImg,
    errorHandling: (err, req, res, next) => {
        if (err) {
            res.status(400).json({ message: 'Invalid file type or size exceeded' });
        } else {
            next();
        }
    },
});