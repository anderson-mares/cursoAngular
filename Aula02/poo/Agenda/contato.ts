import { Telefone } from "./telefone";

export class Contato{

    dataNascimento: Date;
    nome: string;
    telefones: Telefone[];

    constructor(dataNascimento: Date, nome: string, telefones: Telefone[]) {


        this.dataNascimento = dataNascimento;
        this.nome = nome;
        this.telefones = telefones;
    }

    getIdade(): number {
        const anoAtual = new Date;
        const idade = anoAtual.getFullYear() - this.dataNascimento.getFullYear();

        return idade;
    }

}