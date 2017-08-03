const path = require('path');
const express = require('express');
const chalk = require('chalk');
const webpack = require('webpack');
const historyApiFallback = require("connect-history-api-fallback");
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackDashboardPlugin = require('webpack-dashboard/plugin');
const config = require('../webpack.config');
const logger = console;
const compiler = webpack(config);
const app = express();
const port = process.env.PORT || 3001;

compiler.apply(new webpackDashboardPlugin());
app.use(historyApiFallback());
app.use(webpackDevMiddleware(compiler, {
    noInfo: false,
    publicPath: config.output.publicPath,
    stats: { colors: true }
}));
app.use(webpackHotMiddleware(compiler));

app.use('/', require('./routes/browseRouter'));
app.use('/item', require('./routes/itemRouter'));

app.listen(port, () => {
    logger.info(chalk.green.bold(`Server is listening localhost:${port}`));
});
