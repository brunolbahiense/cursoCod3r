const sequencia = {
    _valor: 1, // é uma convensão para ser acessada internamente (evitar haking)
    get valor() { return this._valor++ },
    set valor(valor) { //é possivel criar tipos de validações
        if( valor > this._valor){
            this._valor = valor
        }
    } 
}