var express = require('express');
var multer = require('multer');
var exif = require('exif');

var upload = multer();
var app = express();

app.use(express.static('public'));

app.post('/file-analysis', upload.single('file'), function(req, res){
    var result = {size: req.file.size};

    new exif.ExifImage({image: req.file.buffer}, function(err, data){
      if(!err)
        result.exif = data.image;

      res.json(result);
    });
});


app.listen(process.env.PORT || 8080);