// na promessa ao ser atendida ou nao retorna um resultado

function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'muito top').then(frase => frase.concat('!!!')).then(outrafrase => console.log(outrafrase))