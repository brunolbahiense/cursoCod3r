const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
pilotos.pop()// Retira o ULTIMO elemento do Array
console.log(pilotos)

pilotos.push('Verstappen') //Adciona um elemento
console.log(pilotos)

pilotos.shift()// remove o PRIMEIRO elemento do Array
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)


// O splice pode acdionar ou remover elementos
// primeiro numero é o indice, o segundo é quantos serão removidos 

//adcionar
pilotos.splice(2,0,'Bottas', 'Massa')
console.log(pilotos)

//Remover
pilotos.splice(3, 1)

const algunsPilotos = pilotos.slice(2)// ele gera um novo Array, a partir do incide escolhido. 
console.log(algunsPilotos)