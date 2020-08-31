// essa é a função autoinvocada, é anonima e na hora que se declara ela ja aciona a funcao
// Imediatly Invoked Function Expression (IIFE)
(function (){
    console.log('Será Executado na Hora!')
    console.log('Foge do escopo abrangente!')
})()