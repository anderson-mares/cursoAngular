//Importando a nosso script com a classe
import { Calculadora } from "./script-exemplo-calculadora";

//Instanciando variáveis
let x: number = 300;
let y: number = 3;

let calc: Calculadora = new Calculadora;

//Fazendo os cálculos e guardando em novas variáveis
let soma = calc.fazerCalculo(Calculadora.SOMA, x, y);
let subt = calc.fazerCalculo(Calculadora.SUBT, x, y);
let mult = calc.fazerCalculo(Calculadora.MULT, x, y);
let divs = calc.fazerCalculo(Calculadora.DIVS, x, y);

//Apresentando valores
console.log(soma);
console.log(subt);
console.log(mult);
console.log(divs);