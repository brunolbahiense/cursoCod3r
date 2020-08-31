// this e Bind
const pessoa = {
    saudacao: 'bom dia', 
    falar () {
        console.log (this.saudacao)
    }
}

//pessoa.falar()
//const falar = pessoa.falar
//falar ()
// ao tentar chamar o pessoa.falar em uma constante, o this mudou a referencia, deste modo a resposta é indefinida pois o this esta no window/global,
// este é um conflito entre a programação funcional e a POO 


// o .bind() serve para resgatar qual o this certo para tal comando; referencia o objeto. bind -> ligar
const falar = pessoa.falar.bind(pessoa)