//Criando a classe
export class Calculadora {

    //Definindo atributos estáticos e readonly
    static readonly SOMA: string = "+";
    static readonly SUBT: string = "-";
    static readonly DIVS: string = "/";
    static readonly MULT: string = "*";

    constructor() {}

    public fazerCalculo (op: String, x: number, y: number): number {
    
        switch (op) {
            case Calculadora.SOMA:
                return this.somar(x,y);

            case Calculadora.MULT:
                return this.multiplicar(x,y);

            case Calculadora.DIVS:
                return this.dividir(x,y);

            case Calculadora.SUBT:
                return this.subtrair(x,y);

            default:
                return 0;
        }
    }

    private somar(num1: number, num2: number): number {
        return num1 + num2;
    }

    private subtrair(num1: number, num2: number): number {
        return num1 - num2;
    }

    private multiplicar(num1: number, num2: number): number {
        return num1 * num2;
    }

    private dividir(num1: number, num2: number): number {
        return num1 / num2;
    }

}