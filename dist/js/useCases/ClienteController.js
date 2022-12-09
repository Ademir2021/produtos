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
exports.CreateClienteController = void 0;
const ClienteUseCase_1 = require("./ClienteUseCase");
class CreateClienteController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Nome_Cliente, CPF_Cliente, Endereco_Cliente, Telefone_Cliente } = request.body;
            const createClienteUseCase = new ClienteUseCase_1.CreateClienteUseCase();
            const cliente = yield createClienteUseCase.execute({
                Nome_Cliente,
                CPF_Cliente,
                Endereco_Cliente,
                Telefone_Cliente
            });
            return response.json(cliente);
        });
    }
}
exports.CreateClienteController = CreateClienteController;
