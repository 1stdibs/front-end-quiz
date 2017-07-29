const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: __dirname,
    devtool: 'cheap-module-eval-source-map',
    entry: {
        browse: 'entries/browse.js',
        item: 'entries/item.js'
    },
    output: {
        path: path.join(__dirname, '..'),
        publicPath: '/bundle/',
        filename: '[name].js'
    },
    resolve: {
        root: path.resolve(__dirname + '/../app'),
        extensions: ['', '.js', '.jsx', '.css', '.scss']
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.s?css$/,
                loaders: [
                    'style-loader',
                    'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                    'postcss-loader'
                ]
            }
        ]
    },
    postcss: function () {
        return [require('autoprefixer'), require('precss')];
    },
    stats: { colors: true }
};
