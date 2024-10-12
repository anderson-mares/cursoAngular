"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefone = void 0;
var Telefone = /** @class */ (function () {
    function Telefone(ddd, numero, operadora, tipo) {
        this.ddd = ddd;
        this.numero = numero;
        this.operadora = operadora;
        this.tipo = tipo;
    }
    Telefone.prototype.getTelefone = function () {
        return "(".concat(this.ddd, ") ").concat(this.numero);
    };
    return Telefone;
}());
exports.Telefone = Telefone;
