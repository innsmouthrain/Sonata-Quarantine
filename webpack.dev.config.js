var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, '../');

module.exports = {
	mode: 'development',
	entry: [
		path.join(__dirname, './src//index.js')
	],

	module: {
		rules: [{
			test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/
			// test: /\.(jsx)$/,
			// loader: 'babel-loader',
			// exclude: /node_modules/
		}
		]
	},
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		contentBase: __dirname + '/dist',
		historyApiFallback: true
	}
}
