const pai = {
    nome: 'Pedro',
    corCabelo: 'preto' 
}

const filha1 = Object.create(pai)// ele cria um objeto novo tendo como prototipo o pai
filha1.nome = 'Ana'
console.log( filha1.nome, filha1.corCabelo)

const filha2 = Object.create (pai, {
    nome: { value: 'Bia', writable: false, enumerable: true}
})

console.log (filha2.nome)