"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var agenda_1 = require("./agenda");
var contato_1 = require("./contato");
var contatoComercial_1 = require("./contatoComercial");
var eContato_1 = require("./eContato");
var telefone_1 = require("./telefone");
// Criando alguns números de telefone
var tel1 = new telefone_1.Telefone('61', '99999-8888', 'Vivo', 'Celular');
var tel2 = new telefone_1.Telefone('61', '88888-7777', 'Claro', 'Celular');
var tel3 = new telefone_1.Telefone('61', '77777-6666', 'Tim', 'Celular');
// Criando alguns contatos
var contato1 = new contato_1.Contato(new Date('2001-01-01'), 'Fulano', [tel1]);
var contato2 = new contatoComercial_1.ContatoComercial('Vendas', 'Vendedor', new Date('2015-07-27'), 'Ciclano', [tel2]);
var contato3 = new eContato_1.EContato('www.fulano.com', 'fulano@email.com', new Date('2001-01-01'), 'Beltrano', [tel3]);
// Criando a agenda
var agenda = new agenda_1.Agenda('Minha Agenda');
agenda.CadastrarContato(contato1);
agenda.CadastrarContato(contato2);
agenda.CadastrarContato(contato3);
// Obter quantidade de contatos
console.log(agenda.ObterQuantidade());
// Buscar contato por número de telefone
var conatoEncontrato = agenda.BuscarPorNumero('99999-8888');
console.log(conatoEncontrato === null || conatoEncontrato === void 0 ? void 0 : conatoEncontrato.nome);
// Apagar contato
agenda.ApagarContato(contato1);
// Obter quantidade de contatos após apagar um contato
console.log(agenda.ObterQuantidade());
