console.log (this === global)
console.log (this === module)

console.log(this === module.exports)
console.log(this=== exports)

// esta lógica se altera quando estamos dentro de uma função
function logThis (){
    console.log (this === exports)
    console.log(this === module.exports)
    console.log (this === global)
}