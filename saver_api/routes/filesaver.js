var express = require('express');
var multer  = require('multer');


//change the upload dir with the one you are using
let uploadDir = './uploads'

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir)
  },
  filename: function (req, file, cb) {
    cb(null, req.body.filename)
  }
})

var upload = multer({ storage: storage })
var router = express.Router();

/* GET home page. */
router.post('/', upload.fields([{ name: 'filename', maxCount: 1 },{ name: 'filedata', maxCount: 1 }]), function(req, res, next) {

  res.send({status: 'done'})
});

module.exports = router;
