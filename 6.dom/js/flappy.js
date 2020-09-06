function novoElemento (tagName, className) {
    const elem = document.createElement (tagName)
    elem.className = className
    return elem
}

function barreira (reversa = false) {

    // sempre que se coloca o this.algumacoisa dentro de uma funçao, é para isso poder
    //ser acessado também fora da função, para ser reaproveitado ao escrever o codigo 
    this.elemento = novoElemento('div', 'barreira')

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    this.elemento.appendChild(reversa  ? corpo : borda)
    this.elemento.appendChild(reversa  ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px`
}

function parDeBarreiras (altura, abertura, x){
    this.elemento = novoElemento('div', 'par-de-barreiras')

    this.superior = new barreira(true)
    this.inferior = new barreira(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = x => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(x)
}

const b = new parDeBarreiras (700, 200, 400)
document.querySelector('[wm-flappy]').appendChild(b.elemento)