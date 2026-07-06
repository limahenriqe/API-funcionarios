const Funcionario = require("../models/funcionario")

exports.cadastrar = async(req,res) => {
    // insert into funcionario values (?,?,?)
    const funcionario = await Funcionario.create(req.body)
    res.status(201).json(funcionario) // 201 create
}

exports.listar = async(req,res) => {
    const funcionarios = await Funcionario.findAll()
    res.status(200).json(funcionarios) // 200 deu certo (get)
}

