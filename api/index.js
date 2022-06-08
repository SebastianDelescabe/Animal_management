const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/index');
const bodyParser = require('body-parser');
const cors = require('cors');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/bastoDB');

const app = express();
app.use(bodyParser.json()); //body parse give info JSON format
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
    origin: '*'
}));

app.use('/', routes);

app.listen(3001, () => {
    console.log('listening at 3001');
});
