import { Contato } from "./contato";

export class Agenda {

    public nome: string;
    public contatos: Contato[];

    constructor(nome: string) {
        this.nome = nome;
        this.contatos = [];
    }

    BuscarPorNumero(numero: string) {
        for (var contato of this.contatos) {
            for (var telefone of contato.telefones) {
                if (telefone.numero === numero) {
                    return contato;
                } else {
                    return undefined;
                }
            }
        }
    }
    
    ObterQuantidade(): number {
        return this.contatos.length;
    } 
    
    CadastrarContato(contato: Contato): void {
        this.contatos.push(contato);
    }
    
    ApagarContato(contato: Contato): void {
        this.contatos = this.contatos.filter(c => c !== contato);
    };
}