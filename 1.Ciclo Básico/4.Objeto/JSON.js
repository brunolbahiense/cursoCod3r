// formato utilizado para ser lido por outras linguágens
const obj = {a: 1, b: 2, c: 3, soma() {return a + b + c} }
console.log(JSON.stringify(obj))

// passar de JSON pra normal
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3 }'))