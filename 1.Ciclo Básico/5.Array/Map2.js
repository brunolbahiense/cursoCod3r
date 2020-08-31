const carrinho = [
    '{"nome" : "Borracha", "preco" : 3.45}',
    '{"nome" : "Caderno", "preco" : 13.90}',
    '{"nome" : "Kit Lapis", "preco" : 41.22}',
    '{"nome" : "Caneta", "preco" : 7.70}',
]

// retornar um array apenas com os preços 

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco 
// se eu usar '.algo" sendo esse algo um elemento do array, eu separo e seleciono todos os elementos desta referencia

const resultado = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado)