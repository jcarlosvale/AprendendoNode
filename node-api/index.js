//inclusao pacotes
const express = require('express')

//banco de dados
const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://postgres:postgres@localhost:5432/')


//instancia o express
const app = express()

//definicao de porta
const port = 3000

//servico hello world
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//servico de busca de categorias
app.get('/categorias', (req, res) => {

    db.any('select ID, DESCRICAO from CATEGORIA')
        .then(data => {
            // data = array of events, with 'code' converted into integer
            res.send(data)
        })
        .catch(error => {
            // error
            console.log('ERROR:', error)
        });
})
  
//servico de busca de noticias
app.get('/categorias/:categoriaId/noticias', (req, res) => {

    var id = req.params.categoriaId

    db.any('select id, titulo from noticia where id_categoria = $1', id)
        .then(data => {
            console.log("id = " + id)
            res.send(data)
        })
        .catch(error => {
            // error
            console.log('ERROR:', error)
        });
})

//servico de busca de noticia especifica
app.get('/categorias/:categoriaId/noticias/:noticiaId', (req, res) => {

    var categoriaId = req.params.categoriaId
    var noticiaId = req.params.noticiaId

    db.any('select id, titulo, conteudo from noticia where id_categoria = $1 and id = $2', [categoriaId, noticiaId])
        .then(data => {
            res.status(200).send(data) //example sending status code
        })
        .catch(error => {
            // error
            console.log('ERROR:', error)
        });
})

//iniciando o servidor
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})