import express from 'express'

const servidor = express()

const controlador = (req, res) => {
    return res.send('Meu primeiro servidor Node.js com Express')
}

servidor.get('/home', controlador)

servidor.listen(3000)
