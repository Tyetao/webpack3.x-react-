const path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

module.exports = {
    entry: {
        app: [
            'react-hot-loader/patch',
            path.join(__dirname, 'src/index.js')
        ]
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js'
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 8080,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '0.0.0.0',
        hot: true,
        proxy: {
            "/api/*": "http://localhost:8080/$1"
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(png|jpg|jpeg|gif|svg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        }]
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(), //调用webpack的热更新插件
        new HtmlWebpackPlugin({
            title: 'My React',
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html'),
            favicon: './Binary.ico',
            inject: true
        }),
        new FriendlyErrorsPlugin()
    ],
    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            components: path.join(__dirname, 'src/components'),
            router: path.join(__dirname, 'src/router'),
            actions: path.join(__dirname, 'src/redux/actions'),
            reducers: path.join(__dirname, 'src/redux/reducers')
        }
    }
};