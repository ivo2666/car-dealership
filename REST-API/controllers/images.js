const models = require('../models');
const formidable = require('formidable');
const fs = require('fs');

    module.exports = {
    get: (req, res, next) => {

    },

    post: (req, res, next) => {
        const form = formidable({ multiples: true, uploadDir: `${process.cwd()}/uploadImages` });

        form.on('file', function (field, file) {
            //rename the incoming file to the file's name
            fs.rename(file.path, `${form.uploadDir}/${file.name}`, (err) => {
                if (err) {
                    throw err
                }
                console.log('rename complte');
            });
        });


        form.parse(req, (err, fields, files) => {
            if (err) {
                next(err);
                return;
            }
            res.json({ fields, files });
        });
    },


};