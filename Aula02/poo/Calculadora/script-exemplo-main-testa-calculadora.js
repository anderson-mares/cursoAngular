"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Importando a nosso script com a classe
var script_exemplo_calculadora_1 = require("./script-exemplo-calculadora");
//Instanciando variáveis
var x = 300;
var y = 3;
var calc = new script_exemplo_calculadora_1.Calculadora;
//Fazendo os cálculos e guardando em novas variáveis
var soma = calc.fazerCalculo(script_exemplo_calculadora_1.Calculadora.SOMA, x, y);
var subt = calc.fazerCalculo(script_exemplo_calculadora_1.Calculadora.SUBT, x, y);
var mult = calc.fazerCalculo(script_exemplo_calculadora_1.Calculadora.MULT, x, y);
var divs = calc.fazerCalculo(script_exemplo_calculadora_1.Calculadora.DIVS, x, y);
//Apresentando valores
console.log(soma);
console.log(subt);
console.log(mult);
console.log(divs);
