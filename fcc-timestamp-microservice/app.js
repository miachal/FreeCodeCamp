var express = require('express');
var jt = require('./jsonTime');

var app = express();

app.use(express.static('public'));

app.get('/:time', function(req, res){
  if(req.params.time)
    res.json(jt.jsonTime(req.params.time));
});

app.listen(process.env.PORT || 8080);
