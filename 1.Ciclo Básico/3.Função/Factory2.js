function criarProduto (a, b){
    return {
        nome: a,
        preco: b,
        desconto: 0.1
    }
}
console.log(criarProduto('carro', 50000))