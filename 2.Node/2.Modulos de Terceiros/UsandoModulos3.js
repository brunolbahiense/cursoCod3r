// ele puxa a biblioteca lançada para poder executar comandos que antes não existeiam
const _ = require('lodash')
setInterval(() => console.log(_.random(1, 1000)), 2000)