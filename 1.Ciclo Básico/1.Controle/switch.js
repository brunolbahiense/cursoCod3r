const imprimirResultado = function (nota){
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de honra')// colocando apenas no ultimo retira a necessidade de colocar igual ao case 10
            break
        case 8: case 7:
            console.log ('Aprovado') // tambem pode-se colocar os 2 cases na mesma linha 
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log I('Reprovado')
            break
        default:
            console.log ('nota inválida')

    }
}