var express = require('express');
var app = express();
var path = require('path');
const ejs = require('ejs');
var publico = path.join(__dirname, 'public');


app.set('view engine', 'ejs');

// viewed at http://localhost:80
app.get('/', function(req, res) {
    res.render('index');    //di default cercherà una cartella views che conterrà index.ejs
});

app.get('/projects', function(req, res) {
        res.render('projects');
});

app.get('/blog', function(req, res) {
    res.render('blog');
});

app.use('/', express.static(publico));


let port = process.env.PORT;
if(port == null || port ==""){
	port = 80;
}

app.listen(port);
