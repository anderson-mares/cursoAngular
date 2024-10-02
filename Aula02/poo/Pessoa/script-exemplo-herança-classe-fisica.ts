import { Pessoa } from "./script-exemplo-herança-pessoa";

export class PessoaFisica extends Pessoa {

    //Definido atributos
    public cpf: string

    constructor(nome: string, endereco: string, cpf: string) {
        super(nome, endereco);
        this.cpf = cpf;
    }
}