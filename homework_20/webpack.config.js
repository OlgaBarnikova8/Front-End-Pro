const path = require("path");
var NODE_ENV = require('node-dependency');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/js/index.js",
    module: {
        rules: [
            { test: /\.css$/, use: ["style-loader", "css-loader"], },
            { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
            { test: /\.s[ac]ss$/i, use: [ "style-loader", "css-loader", "sass-loader", ], },
        ],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.bundle.js",        
    },    
    plugins: [new HtmlWebpackPlugin({
        title: "My App",
        template: path.resolve(__dirname, "./src/template.html"),
    })],
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',    
}