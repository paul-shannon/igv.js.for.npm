var path = require('path');
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
    entry: './src/main.js',
    plugins: [
       new webpack.ProvidePlugin({
          igv: "igv.js.npm"
          })],
    module: {
	rules: [{test: /\.css$/, use: ['style-loader', 'css-loader']},
                {test: /\.svg$/, use: ['svg-loader']}
                ]
        },
    output: {
       path: path.resolve(__dirname, './dist/'),
       filename: 'bundle.js'
       }
}
