import { Pessoa } from "./script-exemplo-herança-pessoa";

export class PessoaJuridica extends Pessoa {

    //Definido atributos
    public cnpj: string;

    constructor(nome: string, endereco: string, cnpj: string) {
        super(nome, endereco);
        this.cnpj = cnpj;
    }
}