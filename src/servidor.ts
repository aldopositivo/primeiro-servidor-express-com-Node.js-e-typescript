// import express, { Request, Response } from 'express'
// const servidor = express()
//  const controlador = (req: Request, res:Response) => {
//     return res.send(`Meu primeiro servidor Node.js e TypeScript`)
// }
// servidor.get('/home', controlador)
// servidor.listen(3000)

// outra maneira de fazer 

// servidor.get('/home', (req, res) => {
//     return res.send('Meu primeiro servidor Node.js com Express')
// })

// Crinado um servidor para calcular


import "dotenv/config";
import express from "express";

const app = express();

// Se valor estiver definido, converte para número; caso contrário, retorna defaultValue.
const Numero = (valor: string | undefined, deferirValor: number = 0): number => {
    return valor? Number(valor) : deferirValor
}

app.get('/somar', (req, res) => {
    const num1 = Numero(process.env.NUM_1)
    const num2 = Numero(process.env.NUM_2)
    const resposta = num1 + num2;
    res.send(resposta.toString());
});

app.get('/subtrair', (req, res) => {
    const num1 = Numero(process.env.NUM_1)
    const num2 = Numero(process.env.NUM_2)
    const resposta = num1 - num2;
    res.send(resposta.toString());
});

app.get('/dividir', (req, res) => {
    const num1 = Numero(process.env.NUM_1)
    const num2 = Numero(process.env.NUM_2)
    const resposta = num1 / num2;
    res.send(resposta.toString());
});

app.get('/multiplicar', (req, res) => {
    const num1 = Numero(process.env.NUM_1)
    const num2 = Numero(process.env.NUM_2)
    const resposta = num1 * num2;
    res.send(resposta.toString());
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});




