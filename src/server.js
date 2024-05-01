require('express-async-errors')

const express = require('express')
const routes = require('./routes')
const AppError = require('./utils/AppError.js')

const app = express()

app.use(express.json())
app.use(routes)

app.use((error, req, res, next)=>{
    if (error instanceof AppError){
        return res.json(error.statusCode).json({
            status:"error",
            message: error.message
        })
    }

    return res.status(500).json({
        status:"error",
        message:"Erro interno no servidor"
    })
})

const port = 3333
app.listen(port, ()=> console.log(`Esse servidor está rodando na porta ${port}`))