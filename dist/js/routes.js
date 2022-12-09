"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const ClienteController_1 = require("./useCases/ClienteController");
const router = (0, express_1.Router)();
exports.router = router;
const createClienteController = new ClienteController_1.CreateClienteController;
router.post("/clientes", createClienteController.handle);
