function carro (velocidadeMáxima = 200, delta = 5) {
    
    // Atributo Privado 
    let velocidadeAtual = 0

    // método público 
    this.acelerar = function () {
        if(velocidadeAtual + delta <= velocidadeMáxima){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMáxima
        }
    }
    // Método Público 2
    this.getVelocidadeAtual = function (){ 
        return velocidadeAtual
    }

}

const uno = new carro
uno.acelerar()

console.log (uno.getVelocidadeAtual())

const ferrari = new carro (350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log (ferrari.getVelocidadeAtual())
