// mapeia os elementos de um array criando outro com o mesmo tamanho.
const nums = [1, 2, 3, 4, 5]

//o Map é um For com propósito, ele altera algo

let resultado = nums.map(function (e){
    return e * 2
})
console.log(resultado)