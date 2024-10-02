"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
//Criando a classe
var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.fazerCalculo = function (op, x, y) {
        switch (op) {
            case Calculadora.SOMA:
                return this.somar(x, y);
            case Calculadora.MULT:
                return this.multiplicar(x, y);
            case Calculadora.DIVS:
                return this.dividir(x, y);
            case Calculadora.SUBT:
                return this.subtrair(x, y);
            default:
                return 0;
        }
    };
    Calculadora.prototype.somar = function (num1, num2) {
        return num1 + num2;
    };
    Calculadora.prototype.subtrair = function (num1, num2) {
        return num1 - num2;
    };
    Calculadora.prototype.multiplicar = function (num1, num2) {
        return num1 * num2;
    };
    Calculadora.prototype.dividir = function (num1, num2) {
        return num1 / num2;
    };
    //Definindo atributos estáticos e readonly
    Calculadora.SOMA = "+";
    Calculadora.SUBT = "-";
    Calculadora.DIVS = "/";
    Calculadora.MULT = "*";
    return Calculadora;
}());
exports.Calculadora = Calculadora;
