"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Importando nossa classe
var script_exemplo_classe_1 = require("./script-exemplo-classe");
//Criando instacias
var joao = new script_exemplo_classe_1.Pessoa();
var maria = new script_exemplo_classe_1.Pessoa();
//Atribuindo valores as instancias
joao.nome = "João";
joao.dataNascimento = new Date("15/10/87");
maria.nome = "Maria";
maria.dataNascimento = new Date("13/10/61");
//Uitilizando os métodos da minha instancia
joao.digaOla();
maria.digaOla();
