const valores = [7.7, 8.9, 6.3, 9.2] 
console.log (valores[0], valores [3])
valores [4] = 10
console.log (valores)
console.log(valores.length)
// pode-se adcionar outros tipos ao array, como texto, valores booleanos, valores nulos etc; todavia, não é recomendado pois não faz jus às boas práticas
console.log(valores.pop) // retira elementos de um array
delete valores [0]// também excluir elementos do array