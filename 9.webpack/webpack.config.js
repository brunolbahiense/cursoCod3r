const webpack = require('webpack')
const miniCssExtractPlugin = require('mini-css-extract-plugin') 

module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public' //esse dirname aponta pro raiz, ou seja a pasta webpack
    },
    plugins: [
        new miniCssExtractPlugin ({
            filename: "estilo.css"

        })
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
        }]
    }
}