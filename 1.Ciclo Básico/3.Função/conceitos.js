//forma básica da função
function fun1 () {

}

// pode ser armazenado em uma variável
const fun2 = function () {

}

// pode também armazenar em um array, mesmo não sendo comum 
const array = [function (a,b) {return (a + b)}, fun1, fun2]

// pode-se também armazenar em um objeto
const obj = {}

obj.falar = function () {return 'Opa!'}

