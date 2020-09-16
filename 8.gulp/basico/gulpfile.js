const gulp = require('gulp')
const {series,parallel} = require('gulp')

const antes1 = cb => {
    console.log('tarefa antes 1')
    return cb()
}
const antes2 = cb => {
    console.log('tarefa antes 2')
    return cb()
}
const fim = cb => {
    console.log('FIM')
    return cb()
}
function copiar (cb) {
    gulp.src(['pastaA/arquivo1.txt','pastaA/arquivo2.txt'])
        .pipe(gulp.dest('pastaB'))// transforma os arquivos definidos naquilo que se deseja
    return cb()
}
// DEVEMOS SEMPRE exportar o default
module.exports.default = series (parallel(antes1,antes2),copiar,fim)
