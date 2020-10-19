const modoDev = process.env.NODE_ENV!== 'production'
const webpack = require('webpack')
const miniCssExtractPlugin = require('mini-css-extract-plugin') 
const TerserPlugin = require('terser-webpack-plugin')
const optimizeCssAssetsPluguin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production', // cria uma alternancia que escolhemos se estamos no desenvolvimento ou na produção 
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public' //esse dirname aponta pro raiz, ou seja a pasta webpack
    },
    devServer: {
        contentBase: './public',
        port: 9000
    },
    optimization: {
        minimizer: [
            new optimizeCssAssetsPluguin({})
        ]

    },
    plugins: [
        new miniCssExtractPlugin ({
            filename: "estilo.css"

        }),
        new TerserPlugin({
            parallel: true,
            terserOptions: {
                ecma: 6,
            },
        }),
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/, // lendo arquivos .css, scss, sass
            use: [
                miniCssExtractPlugin.loader, // esse conflita com o de baixo
                //'style-loader', // adciona dentro da DOM a tag style
                'css-loader',
                'sass-loader',
            ]
        }, {
            test:/\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}