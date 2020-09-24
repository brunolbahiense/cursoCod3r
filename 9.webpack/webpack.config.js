const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public' //esse dirname aponta pro raiz, ou seja a pasta webpack
    },
    module: {
        rules: [{
            test: /\.css$/, // lendo arquivos .css
            use: [
                'style-loader', // adciona dentro da DOM a tag style
                'css-loader',
            ]
        }]
    }
}