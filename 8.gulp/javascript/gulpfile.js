// vamos concatenar os arquivos, adcionar o babel e minimiza-los
const {series} = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao (cb) {
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false, 
            presets: ["env"] //pegar a versao mais nova do JS
        }))
        .pipe(uglify())//transforma todo o código em uma linha só
        .pipe(concat('codigo.min.js'))//pega todos os arquivos do babel
        .pipe(gulp.dest('build'))

    return cb()
}

exports.default = series(padrao)