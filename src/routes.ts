import {response, Router } from "express"
import { CreateClienteController } from "./useCases/ClienteController"
import {} from "axios"

const router = Router()

const createClienteController = new CreateClienteController

router.post("/clientes", createClienteController.handle)

router.get("/clientes", (request, response)=> {
    return response.json([
        { Nome_Cliente: "Joao",
          CPF_Cliente: "99999999",
          Endereco_Cliente: "Avenida Mexico",
          Telefone_Cliente: "449999999"}
    ])
})


export { router }