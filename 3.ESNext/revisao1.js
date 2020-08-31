// Arrow function
const soma = (a, b) => a + b
console.log(soma(4, 5))


// quaando se coloca em um bloco, o return deixa de ser implicito
const soma2 = (a, b) => {
    return a + b
}
console.log(soma2(4, 5))

// Arrow como this
const lexico1 = () => console.log (this === exports)