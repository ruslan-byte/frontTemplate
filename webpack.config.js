const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
	mode: 'development',
	entry: {
		main: path.resolve(__dirname, './src/index.js')
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].bundle.js',
	},
	plugins: [
		new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/template.twig'), 
            filename: 'index.html',
        }),
        new CleanWebpackPlugin()
	],
	module:
	{
		rules:[
			{
				test: /\.twig$/,
				use: {
					loader: 'twig-loader',
				}
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			}
		]
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		compress: true,
		port: 8080,
	},
}
