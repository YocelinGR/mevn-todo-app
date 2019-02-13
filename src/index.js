const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost/mevn-database')
    .then(db => console.log('DB is connected'))
    .catch(err => console.err(err));


// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/task', require('./routes/task'));

// Static files
// console.log(__dirname + '\\public');
app.use(express.static(__dirname + '\\public'))

// Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});