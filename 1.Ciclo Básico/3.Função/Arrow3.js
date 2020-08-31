// para ver que na arrow o this funciona de forma diferente de uma função
let ComparaComThis = function (param){
    console.log (this === param)
}

ComparaComThis(global)

const obj = {}

ComparaComThis = ComparaComThis.bind(obj)

ComparaComThis(global)
ComparaComThis(obj)

ComparaComThisArrow = param => console.log (this === param)
ComparaComThisArrow(global)