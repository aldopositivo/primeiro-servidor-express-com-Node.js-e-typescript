import express, { Request, Response } from 'express'

const servidor = express()

 const controlador = (req: Request, res:Response) => {
    return res.send(`Meu primeiro servidor Node.js e TypeScript`)
}

servidor.get('/home', controlador)


// outra maneira de fazer 

// servidor.get('/home', (req, res) => {
//     return res.send('Meu primeiro servidor Node.js com Express')
// })

servidor.listen(3000)
