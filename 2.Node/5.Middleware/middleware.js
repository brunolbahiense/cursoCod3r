// o middleware é a forma em que temos diversos passos dentro de uma função para criar o sistema 
// ctx seria o contexto - ele carrrega os dados de um passo para o outro
// a função next é aquela que da a continuidade à cadeia

const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()

}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()

}
const passo3 = ctx => ctx.valor3 = 'mid3'

//função criada para executar os passos
const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length && 
            middlewares [indice](ctx, () => execPasso (indice + 1))
    }
    execPasso(0)
}
const ctx = {}
exec (ctx, passo1, passo2, passo3)
console.log(ctx)
