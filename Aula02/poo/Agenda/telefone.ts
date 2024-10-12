export class Telefone {
    ddd: string;
    numero: string;
    operadora: string;
    tipo: string;

    constructor(ddd: string, numero: string, operadora: string, tipo: string) {
        this.ddd = ddd;
        this.numero = numero;
        this.operadora = operadora;
        this.tipo = tipo
    }

    getTelefone(): string {
        return `(${this.ddd}) ${this.numero}`;
    }
}