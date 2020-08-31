// filtra o array para mostrar apenas alguma parte que se faça necessario de acordo com parametros

const produtos = [
    {nome: 'notebook', preco: 2999, fragil: true},
    {nome: 'ipad pro', preco: 4199, fragil: false},
    {nome: 'copo de vidro', preco: 12.49, fragil: true},
    {nome: 'copo de plastico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){
    return
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil



console.log(produtos.filter(caro).filter(fragil))