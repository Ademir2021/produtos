import { Request, Response } from "express"
import { CreateClienteUseCase } from "./ClienteUseCase"

class CreateClienteController{
    async handle(request: Request, response: Response){
        const {
            Nome_Cliente,
            CPF_Cliente,
            Endereco_Cliente,
            Telefone_Cliente} = request.body

        const createClienteUseCase = new CreateClienteUseCase()

        const cliente = await createClienteUseCase.execute({
            Nome_Cliente,
            CPF_Cliente,
            Endereco_Cliente,
            Telefone_Cliente
        })
        return response.json(cliente)
    }
}

export { CreateClienteController }