"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
//Declarando nossa classe
var Pessoa = /** @class */ (function () {
    //Declarando um construtor
    function Pessoa() {
    }
    //Declarando as ações da classe
    Pessoa.prototype.digaOla = function () {
        console.log("Olá, meu nome é " + this.nome);
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
