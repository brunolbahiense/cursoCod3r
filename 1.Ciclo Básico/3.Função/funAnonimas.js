// é possivel criar funções sem declarar nome a elas, um grande exemplo é a arrow Function
const soma = function (x, y){
    return x + y
}

const imprimirResultado = function ( a, b, operacao = soma){
    console.log(operacao(a, b))    
}

imprimirResultado(3, 4)
