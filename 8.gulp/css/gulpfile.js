const {series} = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss') // tem que ser esse com css no fim
const concat = require('gulp-concat')

function transformcaocss (){
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({"uglyComments":true})) // deixa em uma linha
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

exports.default = series(transformcaocss)