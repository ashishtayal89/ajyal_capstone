var path = require('path');
var webpack = require('webpack');

var APP_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'dist'); 

var config = {
    entry: {
        app: APP_DIR + '/index.js'
    },
    output: {
        path: BUILD_DIR,
        filename: 'app.bundle.js'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: "src",
        hot: true
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                include: APP_DIR,
                loader: 'css-loader'
            },
            { 
                test: /\.svg$/, 
                loader: 'svg-loader'
            }
        ]
    },
    resolve: {
    extensions: ['.js', '.jsx', '.json']
    }
};
module.exports = config;
