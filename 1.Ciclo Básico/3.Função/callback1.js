const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir (nome, Indice) {
    console.log(`${Indice+1}. ${nome}`)
}

fabricantes.forEach(imprimir)