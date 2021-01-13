const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const secret = 'secret';
const multer = require('multer')

module.exports = (app) => {
    app.use(cors({
        exposedHeaders: "Authorization"
    }));

    app.use(bodyParser.json());

    app.use(cookieParser(secret));

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, 'public2')
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname )
      }
  })

  var upload = multer({ storage: storage }).single('file')

  app.post('/api/upload',function(req, res) {
     
    upload(req, res, function (err) {
           if (err instanceof multer.MulterError) {
               return res.status(500).json(err)
           } else if (err) {
               return res.status(500).json(err)
           }
      return res.status(200).send(req.file)

    })

});


};