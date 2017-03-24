const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

//define static file directory
app.use(express.static('static'));

app.use('/', require('./routes/browseRouter'));
app.use('/item', require('./routes/itemRouter'));

//add route for index page as
app.get('(/|/browse/*|/item/*)', (req, res) => {
  res.status(200).sendFile(__dirname + '/views/index.html');
});

const server = app.listen(port, function () {
    console.log('Example app listening at localhost:%s', port);
});
