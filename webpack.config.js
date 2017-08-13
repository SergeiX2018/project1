const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/todo.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'application.js'
    },
    module: {
        rules:[
            {
                test: /\.less/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader",

                ]
            }
        ]

    },
    plugins: [new HtmlWebpackPlugin()]
};