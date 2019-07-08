
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var roomRouter = require('./routes/rooms');
var userRouter = require('./routes/users');

const app = express();

// const uri = 'mongodb+srv://tinkinand:<password>@cluster0-dzufl.azure.mongodb.net/test?retryWrites=true&w=majority';
// mongoose.connect('mongodb://localhost:27017/posts');
const mongoDB = 'mongodb+srv://edwinp:Neamilbus1.@projectredescluster-pijgi.azure.mongodb.net/iot_home?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'conection error'));
db.once('open', function(callback){
    console.log('Conection Succeeded');
});

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// Get 'World' page
app.get('/world', function (req, res) {
  // por el momento redireccionamos a /room
  res.redirect('/rooms/light_bulbs');
});

// use Index and Room routes
app.use('/', indexRouter);
app.use('/rooms', roomRouter);
app.use('/users', userRouter);

app.listen(process.env.PORT || 8081);