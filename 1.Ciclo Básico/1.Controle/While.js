// mais indicado para um numero indeterminado de repetições 
function numeroInteiroAleatorio (min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)

}

let opcao = 0

while(opcao != -1){
    opcao = numeroInteiroAleatorio(-1, 10)
    console.log (`a opção escolhida foi ${opcao}.`)
}

console.log('fim')