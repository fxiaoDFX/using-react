const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.js",

    output: {
        filename: "[name].bundle.js",
        path: path.join(__dirname, "./dist"),
        clean: true,
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html",
        }),
    ],

    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
        ],
    },
}
