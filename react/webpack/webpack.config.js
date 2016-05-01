const path = require('path');
const webpack = require('webpack');

module.exports = {
	debug: true,
	context: __dirname,
	devtool: 'source-map',
	entry: 'Main.react.js',
	output: {
		path: path.join(__dirname, '..'),
		publicPath: '/bundle/',
		filename: 'main.js'
	},
	resolve: {
		root: path.resolve(__dirname + '/../app'),
		extensions: ['', '.js', '.jsx', '.css', '.scss']
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.ProvidePlugin({
			$: "jquery"
		})
	],
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel'
		}, {
			test: /\.s?css$/,
			loaders: [
				'style-loader',
				'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
				'postcss-loader'
			]
		}, {
			test: /\.png$/,
			loader: "url-loader"
		}]
	},
	postcss: function() {
		return [require('autoprefixer'), require('precss')];
	},
	stats: {
		colors: true
	}
};