const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry : {
        spa1stdibs : ['./app/entries/spa-entry.js']
    },
    output : {
        path :  path.resolve(__dirname, '..', 'static/js'),
        filename : '[name].js'
    },
    watch : true,
    module : {
        rules : [
            {
                test : [/\.js$/, /\.jsx$/],
                loader : 'babel-loader',
                options : {
                    cacheDirectory : true
                },
                exclude : /node_modules/
            }
        ]
    },
    resolve : {
        extensions : ['.js', '.jsx'],
        modules : [path.resolve(__dirname, '..'), 'node_modules']
    },
    plugins : [
        new webpack.optimize.CommonsChunkPlugin({
            name : 'vendor',
            minChunks: ({resource}) => /node_modules/.test(resource)
        })
    ]
};
