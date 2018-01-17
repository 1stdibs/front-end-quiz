const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use('/browse', require('./routes/browseRouter'));
app.use('/item', require('./routes/itemRouter'));

app.listen(port, function () {
    console.log('Example app listening at localhost:%s', port);
});
