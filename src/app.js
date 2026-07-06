const express = require("express")
const routes = require("./routes/funcionarioRoutes")
const sequelize = require("./config/database")

const app = express()

app.use(express.json())
app.use(routes)

//sincroniza tabelas automaticamente
sequelize.sync()

module.exports = app



// //banco de dados em memoria
// const funcionarios = []

// //rota para cadastrar
// app.post("/funcionarios", (req,res)=>{

//     const {nome, cargo} = req.body

//     const funcionario = {
//         nome, 
//         cargo
//     }

//     funcionarios.push(funcionario)

//     res.status(201).json(funcionario)
// })

// //rota para mostrar os funcionarios
// app.get("/funcionarios",(req,res)=>{

//     res.status(200).json(funcionarios)
// })

// module.exports = app