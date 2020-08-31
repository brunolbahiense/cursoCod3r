// cadeia de prototipos
const avo = { attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'} // forma de referenciar que possui um atibuto pai (anotação valida para objetos)
const filho = {__proto__: pai, attr3: 'C'}

console.log(filho.attr1, filho.attr2, filho.attr3)// o filho tem o A e B pois recebeu a herança de seu avo e de seu pai


const carro = {
    velAtual: 0,
    velMax: 200, 
    aceleraMais(delta) {
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return`${this.velAtual}Km/h de ${this.velMax}Km/h `
    }
}

const ferrari = {
    modelo: 'f40',
    velMax: 324 //vai ocorrer o shadowing, esse atributo ficará por cima do atributo anterior 
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo} está à: ${super.status()}` // está sobrescrevendo a função status
    }
}

Object.setPrototypeOf(ferrari, carro) // Essa função estabelece a relação. O prototipo sempre fica depois
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(100)
console.log(volvo.status())