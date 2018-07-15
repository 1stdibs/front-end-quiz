const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;

// Configure app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Allow requests from all origins
app.use(require('cors')());

app.use('/browse', require('./routes/browseRouter'));
app.use('/item', require('./routes/itemRouter'));
app.use('/favorites', require('./routes/favoriteRouter'));

app.listen(port, function () {
    console.log('Example app listening at localhost:%s', port);
});
