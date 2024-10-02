import { Formulas } from "./script-exemplo-interface-formulas";

export class Circulo implements Formulas {

    //Atributos readonly não necessitam de GET e SET simplismente porque são inalteráveis
    public readonly PI: number = Math.PI;

    public raio: number;

    constructor(raio: number) {
        this.raio = raio;
    }
}