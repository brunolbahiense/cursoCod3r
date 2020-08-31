function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Laptop',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(produto.getPreco())
const carro = { preco:49990, desc:0.20 }

// com Call - se altera sem array
console.log(getPreco.call(carro, 0.17, '$'))

// com apply - se altera com array
console.log(getPreco.apply(carro, [0.17, '$']))