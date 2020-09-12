const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.')) // dentro da pasta atual, vai fazer o server funcionar (html, css etc)

app.use(bodyParser.urlencoded({extended: true}))//ler os dados de um formulario e transforma em objeto
app.use(bodyParser.json())// transforma um json que vier ao sistema a um objeto

const multer = require('multer')// para fazer upload 

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')// '.' significa pasta atual
    },
    filename: function(req, file, callback){
        callback(null, `${Date.now()}_${file.originalname}`)// indica o nome do arquivo que se pretende pegar 
    }

})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if(err){
            return res.end('ocorreu um erro')
        }
        res.end('Concluido com sucesso')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body, // funciona pq fizemos um bodyparcer la em cima 
        id: 1
    })
})

app.listen(8080,() => console.log('executando'))