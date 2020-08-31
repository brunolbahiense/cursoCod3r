// arguments se traduz em um array que toda a função tem internamente, todavia; 
//por default ele não possui valor. Mas pode ser manipulado caso desejemos. 

function soma () {
    let soma = 0
    for ( i in arguments){
        soma += arguments[i]
    }
    return soma 
}

console.log (soma(1, 2, 3))

// esse exemplo é antigo, no novo Js tem o operador rest/spread