/**
 * Webpack configuration for development.
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const commonConfig = require('./common.config');
const profile = require('../src/profile.json');

module.exports = {
    entry: path.join(process.cwd(), 'dev', 'index.tsx'),
    output: {
        publicPath: '/',
        filename: 'main.js'
    },
    watch: true,
    devServer: {
        port: profile && profile.port || 3000,
        open: false,
        compress: true,
        inline: true,
        contentBase: path.join(process.cwd(), 'dev'),
        clientLogLevel: 'none',
        watchContentBase: true,
        hot: true,
        overlay: true,
        watchOptions: {
            aggregateTimeout: 1500,
            ignored: /node_modules/
        },
        stats: {
            colors: true,
            moduleAssets: false,
            chunks: false,
            builtAt: true,
            assetsSort: '!size',
            children: false,
            usedExports: false,
            modules: false,
            entrypoints: true,
            context: path.join(process.cwd(), 'src'),
            excludeAssets: assetName => ['node_modules'].some(el => assetName.includes(el))
        },
        historyApiFallback: {
            disableDotRule: true,
            index: '/'
        }
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [...commonConfig.module.rules]
    },
    resolve: commonConfig.resolve,
    plugins: [
        ...commonConfig.plugins,
        new HtmlWebpackPlugin({
            template: path.join(process.cwd(), 'dev', 'index.html'),
            filename: './index.html'
        })
    ]
};