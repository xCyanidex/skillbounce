import fs from 'fs';

export const deleteFile = (fileName, res) => {
    fs.unlink(`uploads/${fileName}`, (err) => {
        if (err) {
            console.log(err)
        } 
    });
};