const models = require('../models');
const formidable = require('formidable');
const fs = require('fs');
const config = require('../config/config');
const fetch = require('node-fetch');
//const cleanUploadImages = require('../utils/cleanUploadImages')

module.exports = {
    del: (req, res, next) => {
        const id = req.params.id;
        const href = req.body.name
        const name = href.split('uploadImages/')[1];
        models.Cars.updateOne({ _id: id }, { $pull: { "images": href } })
            .then((updatedcar) => {
                const path = `${process.cwd()}/uploadImages/${name}`;
                fs.unlink(path, (err) => {
                    if (err) {
                        console.error(err)
                        return
                    }
                });
                models.Cars.findOne({ _id: id })
                    .then((car) => {
                        const imgObj = car.images.map(img => { return { 'href': img } });
                        res.send(imgObj)
                    })
            })
            .catch(next)
    },

    apiPost(req, res, next) {
        try {
            const urls = req.body.urls;
            const newUrls = urls.map(async url => {
                const name = url.split('big/')[1];
                const response = await fetch(url);
                const buffer = await response.buffer();
                const newUrl = `${config.host}/uploadImages/${name}`;
                fs.writeFile(`${process.cwd()}/uploadImages/${name}`, buffer, () => {
                    console.log(newUrl);
                })
                return newUrl
            })
            res.send(newUrls);
        } catch (err) {
            console.log(err);
            next(err)
        }
    },

    post: (req, res, next) => {
        const form = formidable({ multiples: true, uploadDir: `${process.cwd()}/uploadImages` });
        const id = req.params.id;

        //cleanUploadImages(models, id, fs, next);

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
                file.file = [file.file]
            }
            for (let i = 0; i < file.file.length; i++) {
                const f = file.file[i];
                const item = `${config.host}/uploadImages/${f.name}`;
                models.Cars.updateOne({ _id: id }, { $push: { images: item } })
                    .then((updatedcar) => res.send(updatedcar))
                    .catch(next)
            }
        });
    },


};