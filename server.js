/**
 * Created by Suyash on 26-Aug-17.
 */
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/bower_components'));

app.get('/', function(req, res){
    res.redirect('/index.html');
});

app.set('port', (process.env.PORT || 8180));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
app.use(function(req, res, next) {
    if(req.protocol !== 'https') {
        return res.status(403).send({message: 'SSL required'});
    }
    // allow the request to continue
    next();
});