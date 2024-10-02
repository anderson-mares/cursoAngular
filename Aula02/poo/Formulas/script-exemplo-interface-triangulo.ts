import { Formulas } from "./script-exemplo-interface-formulas";

export class Triangulo implements Formulas {

    //Definindo atributos
    public lado_um: number;
    public lado_dois: number;
    public lados_tres: number;

    constructor(l1: number, l2: number, l3: number) {
        this.lado_um = l1;
        this.lado_dois = l2;
        this.lados_tres = l3;
    }
}