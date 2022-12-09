"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClienteUseCase = void 0;
const client_1 = require("../prisma/client");
class CreateClienteUseCase {
    execute({ Nome_Cliente, CPF_Cliente, Endereco_Cliente, Telefone_Cliente }) {
        return __awaiter(this, void 0, void 0, function* () {
            // Verifica se o Cliente existe
            const clienteAlreadyExists = yield client_1.client.cliente.findFirst({
                where: {
                    Nome_Cliente,
                },
            });
            if (clienteAlreadyExists) {
                throw new Error("Cliente alread exist");
            }
            const cliente = yield client_1.client.cliente.create({
                data: {
                    Nome_Cliente,
                    CPF_Cliente,
                    Endereco_Cliente,
                    Telefone_Cliente
                }
            });
            return cliente;
        });
    }
}
exports.CreateClienteUseCase = CreateClienteUseCase;
