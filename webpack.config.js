const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    entry : { //Webpack에게 “이 JS 파일부터 분석해서 관련된 것들 다 묶어줘!” 라고 말하는 것.
        index: './src/index.js'
    },
    output : {
        filename : 'main.js',
        path: path.resolve(__dirname, "dist"),
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                //use: ["style-loader", "css-loader"],
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.jpg$/,
                use: ['file-loader']
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',      
            chunks: ['index']  //이 HTML에는 `‘index’ entry에서 나온 번들 JS만 포함시켜줘!
}),
        new HtmlWebpackPlugin({
            filename: 'search.html',
            template: './src/search.html',
            chunks: ['search']
        }),
        new HtmlWebpackPlugin({
            filename: 'detail.html',
            template: './src/detail.html',
            chunks: ['detail']
        }),
        new HtmlWebpackPlugin({
            filename: 'mypage.html',
            template: './src/mypage.html',
            chunks: ['mypage']
        }),
        new MiniCssExtractPlugin({
            filename: "common.css",
        }),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port:8088,
    }
};