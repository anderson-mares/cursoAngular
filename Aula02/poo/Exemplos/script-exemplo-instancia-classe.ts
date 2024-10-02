//Importando nossa classe
import { Pessoa } from "./script-exemplo-classe";

//Criando instacias
let joao = new Pessoa();
let maria = new Pessoa();

//Atribuindo valores as instancias
joao.nome = "João";
joao.dataNascimento = new Date("15/10/87");

maria.nome = "Maria";
maria.dataNascimento =  new Date("13/10/61");

//Uitilizando os métodos da minha instancia
joao.digaOla();
maria.digaOla();