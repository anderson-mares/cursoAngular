import { Formulas } from "./script-exemplo-interface-formulas";

export class Retangulo implements Formulas {

    //Definindo atributos
    public altura: number;
    public largura: number:

    constructor (largura: number, altura: number) {
        this.largura = largura;
        this.altura = altura;
    }
}