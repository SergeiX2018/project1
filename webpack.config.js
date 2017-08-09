const path = require('path');

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

    }
};