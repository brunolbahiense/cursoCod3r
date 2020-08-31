const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

//como a instancia nova é uma função, é preciso chama-la
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

//neste foi feito o cache do valor criado
contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

//neste como foi são novas instancias criadas numa factory
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)