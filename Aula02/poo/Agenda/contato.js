"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contato = void 0;
var Contato = /** @class */ (function () {
    function Contato(dataNascimento, nome, telefones) {
        this.dataNascimento = dataNascimento;
        this.nome = nome;
        this.telefones = telefones;
    }
    Contato.prototype.getIdade = function () {
        var anoAtual = new Date;
        var idade = anoAtual.getFullYear() - this.dataNascimento.getFullYear();
        return idade;
    };
    return Contato;
}());
exports.Contato = Contato;
