Array.prototype.forEach2 = function(callback){// como funciona o forEach
    for(let i = 0; i < this.length; i++){
        callback (this[i], i, this)
    }

}
const aprovados = ['Ahgata', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome,indice){ // o indice sempre é o segundo parametro.
    console.log(`${indice + 1}) ${nome}`)
})