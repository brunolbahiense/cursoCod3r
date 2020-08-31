// esse operador é denominado por ...
// rest (juntar), spread(espalhar)


// spread com objetos 
const funcionario = {
    nome: 'maria', 
    salario: 3000
}

const clone = {
    ativo: true,
    ... funcionario
}

console.log(clone)

// spread com array 
const grupoA = ['joao', 'pedro', 'maria']
const grupoFinal =['leonardo', 'bruno', ...grupoA, 'alice']
console.log(grupoFinal)