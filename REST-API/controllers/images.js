const models = require('../models');
const formidable = require('formidable');
const fs = require('fs');
const config = require('../config/config');
const cleanUploadImages = require('../utils/cleanUploadImages')

    module.exports = {
    get: (req, res, next) => {

    },

    post: (req, res, next) => {
        const form = formidable({ multiples: true, uploadDir: `${process.cwd()}/uploadImages` });
        const id = req.params.id;
        const filesUrls = [];

        cleanUploadImages(models, id, fs, next);
        
        form.on('file', function (field, file) {
            //rename the incoming file to the file's name
            fs.rename(file.path, `${form.uploadDir}/${file.name}`, (err) => {
                if (err) {
                    throw err
                }
            });
        });


        form.parse(req, (err, fields, file) => {
            if (err) {
                next(err);
                return;
            }
            if (!Array.isArray(file.file)) {
                filesUrls.push(`${config.host}/${file.file.name}`)
            }else {
                for (let i = 0; i < file.file.length; i++) {
                    const f = file.file[i];
                    filesUrls.push(`${config.host}/${f.name}`)
                }
            }
            
            models.Cars.updateOne({ _id: id }, { images: filesUrls })
            .then((updatedcar) => res.send(filesUrls))
            .catch(next)
        });
    },


};