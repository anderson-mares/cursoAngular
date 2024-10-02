//Declarando nossa classe
export class Pessoa {

    //Atributos da nossa classe
    nome: string;
    dataNascimento: Date;
    pai: Pessoa;
    mae: Pessoa;

    //Declarando um construtor
    constructor() {}

    //Declarando as ações da classe
    digaOla(): void {
        console.log("Olá, meu nome é "+ this.nome);
    }
}