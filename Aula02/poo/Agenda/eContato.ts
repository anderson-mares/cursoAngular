import { Contato } from "./contato";
import { Telefone } from "./telefone";

export class EContato extends Contato{
    homepage: string;
    email: string;

    constructor(homepage: string, email: string, dataNascimento: Date, nome: string, telefones: Telefone[]) {

        super(dataNascimento, nome, telefones);
        this.homepage = homepage;
        this.email = email;

    }
}