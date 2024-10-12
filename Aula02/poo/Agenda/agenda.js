"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agenda = void 0;
var Agenda = /** @class */ (function () {
    function Agenda(nome) {
        this.nome = nome;
        this.contatos = [];
    }
    Agenda.prototype.BuscarPorNumero = function (numero) {
        for (var _i = 0, _a = this.contatos; _i < _a.length; _i++) {
            var contato = _a[_i];
            for (var _b = 0, _c = contato.telefones; _b < _c.length; _b++) {
                var telefone = _c[_b];
                if (telefone.numero === numero) {
                    return contato;
                }
                else {
                    return undefined;
                }
            }
        }
    };
    Agenda.prototype.ObterQuantidade = function () {
        return this.contatos.length;
    };
    Agenda.prototype.CadastrarContato = function (contato) {
        this.contatos.push(contato);
    };
    Agenda.prototype.ApagarContato = function (contato) {
        this.contatos = this.contatos.filter(function (c) { return c !== contato; });
    };
    ;
    return Agenda;
}());
exports.Agenda = Agenda;
