const fs = require('fs') // esse fs significa file system, é algo que ja vem com o node

const caminho = __dirname + '/arquivo.json'

//para ler de forma sincrona
const conteudo = fs.readFileSync(caminho, 'utf-8')

console.log(conteudo)

//leitura de forma assincrona
fs.readFile (caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// forma para ler a pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('conteudo da pasta...')
    console.log(arquivos)
})