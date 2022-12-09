import { client } from "../prisma/client"

interface IClienteRequest{
    Nome_Cliente: string
    CPF_Cliente: string
    Endereco_Cliente: string
    Telefone_Cliente: string
}

class CreateClienteUseCase {
    async execute({
            Nome_Cliente,
            CPF_Cliente,
            Endereco_Cliente,
            Telefone_Cliente}: IClienteRequest){
               // Verifica se o Cliente existe
            const clienteAlreadyExists = await client.cliente.findFirst({
                where: {
                    Nome_Cliente,
                },
            })
                if (clienteAlreadyExists){
                    throw new Error("Cliente alread exist")
                }

                const cliente = await client.cliente.create({
                    data:{
                        Nome_Cliente,
                        CPF_Cliente,
                        Endereco_Cliente,
                        Telefone_Cliente
                    }
                })
                return cliente
            }
}

export  { CreateClienteUseCase }