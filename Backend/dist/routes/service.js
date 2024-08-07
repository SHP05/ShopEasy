"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const service_1 = require("../controllers/service");
exports.router = (0, express_1.Router)();
exports.router.post('/', service_1.createService);
exports.router.put('/:id', service_1.updateService);
exports.router.delete('/:id', service_1.deleteService);
exports.router.get('/:id', service_1.getServices);
