var webpack = require('webpack');

module.exports = {
	entry: [
		'./src/index.js'
	],

	output: {
		filename: 'src/bundle.js'
	},

	devServer: {
    contentBase: "./src",
    hot: true
	},

	module: {
		loaders: [
    		{
    			test: /\.js$/,
    			exclude: /node_modules/,
    			loader: "babel-loader",
    			query: {
        			presets: ['es2015']
    			}
    		}
  		]
	}
}
