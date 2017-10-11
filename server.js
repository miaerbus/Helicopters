var express = require('express');
var app = express();
var port = process.env.PORT || 8888;
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();
var appRoutes = require('./app/routes/api')(router);
var path = require('path');

// Middleware use something defined above, order is important
app.use(morgan('dev'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname + '/public')); // for serving static files, frontend has access to public folder
app.use('/api', appRoutes); // api for backend routes

mongoose.connect('mongodb://<test>:<test>@ds161833.mlab.com:61833/helicopters', function(err) {
//mongoose.connect('mongodb://localhost:27017/helicopter', function(err) {
  if (err) {
    console.log('Not connected to the DB: ' + err);
  } else {
    console.log('Successfully connected to MongoDB');
  }
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

app.listen(port, function() {
  console.log('Running the server on port ' + port);
});
 