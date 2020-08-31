// formas de dar um valor padrão caso nao seja informado um parametro

// antigamente 
// Ex1
function soma1 (a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c 
}
console.log (soma1())

// Ex2
function soma2 (a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c 
    // essa é a forma mais recomendada
    return a + b + c
    
}
console.log(soma2())

// Atualmente 
function soma (a = 1, b = 2, c = 3){
    return a + b + c
}



