// as arrow functions encurtam a declaração da função 
let dobro = function (a){
    return a * 2
}

// a função arrow sempre é anonima, se quiser chama-la é necessario colocar em uma variavel
dobro = (a) => {
    return a * 2
}

// também pode ser escrito assim se tiver so um paramentro e o retorno é unico
dobro = a => a * 2 