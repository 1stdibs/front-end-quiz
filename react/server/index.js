const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('../webpack/webpack.config');

const compiler = webpack(config);
const app = express();
const port = process.env.PORT || 3001;

app.use(webpackDevMiddleware(compiler, { publicPath: config.output.publicPath }));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use('/', require('./routes/browseRouter'));
app.use('/item', require('./routes/itemRouter'));

const server = app.listen(port, function () {
    console.log('Example app listening at localhost:%s', port);
});
