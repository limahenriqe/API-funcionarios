const { default: axios } = require("axios")
const Funcionario = require("../models/funcionario")

exports.cadastrar = async(req,res) => {
    
    try {

        const funcionario = await Funcionario.create(req.body)

        await axios.post(`${process.env.API_BENEFICIOS}/beneficios`,{
            funcionarioId: funcionario.id,
            salario:funcionario.salario,
            cargo: funcionario.cargo
        })

        await axios.post(`${process.env.API_FOLHA}/folha`,{
            funcionarioId: funcionario.id,
            salarioBruto: funcionario.salario
            })


        res.status(201).json(funcionario)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({mensage:"Erro de Servidor"})
    }

}

exports.listar = async(req,res) => {

    //select * from funcionarios
    const funcionarios = await Funcionario.findAll()
    res.status(200).json(funcionarios)
}


exports.deletar = async (req,res) => {
    
    try {
        
        const {id} = req.params;

        const funcionario = await Funcionario.findByPk(id);

        if (!funcionario) {
            return res.status(404).json({
                message: "Funcionario não encontrado"
            });
        }

        await funcionario.destroy();

        res.status(200).json({
            message: "Funcionário excluído com sucesso"
        });

    } catch (error) {
        
        console.log(error)

        res.status(500).json({
            message: "Erro ao excluir funcionário"
        })
    }
}