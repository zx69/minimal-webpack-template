const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.ts',
	output: {
		filename: 'app.js',
	},
	resolve: {
		extensions: ['.js', '.ts', '.jsx', '.tsx'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/i,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/tpl/index.html',
		})
	]
}