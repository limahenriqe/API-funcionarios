const request = require("supertest")

const app = require ("../src/app")

//escrita de um teste
describe("API de funcionarios", ()=>{
    
    it("Deve cadastrar um funcionario", async()=>{

        const resposta = await request(app).post("/funcionario").send({
            nome: "Maria",
            cargo: "Analista"
        })

    expect(resposta.statusCode).toBe(201)
    
    expect(resposta.body.nome).toBe("Maria")

    expect(resposta.body.cargo).toBe("Analista")
    })
})