const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular',{framework: true})

console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function () {}, 'função'],
    [{}, 'objeto'],
    [123, 'numeros']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(vl, ch)
})

// has indica se o elemento esta contido dentro do array
console.log (chavesVariadas.has(123))

// ainda podemos usar o delete para apagar 
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))

//temos o size para demostrar quantos elementos estao dentro deste array
console.log(chavesVariadas.size)