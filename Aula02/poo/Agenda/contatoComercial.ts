import { Contato } from "./contato";
import { Telefone } from "./telefone";

export class ContatoComercial extends Contato{
    atividade: string;
    cargo: string;

    constructor(atividade: string, cargo: string, dataNascimento: Date, nome: string, telefones: Telefone[]) {
        super(dataNascimento, nome, telefones);
        this.atividade = atividade;
        this.cargo = cargo;
    }
}