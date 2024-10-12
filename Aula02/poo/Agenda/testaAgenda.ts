import { Agenda } from "./agenda";
import { Contato } from "./contato";
import { ContatoComercial } from "./contatoComercial";
import { EContato } from "./eContato";
import { Telefone } from "./telefone";

// Criando alguns números de telefone
const tel1 = new Telefone('61', '99999-8888', 'Vivo', 'Celular');
const tel2 = new Telefone('61', '88888-7777', 'Claro', 'Celular');
const tel3 = new Telefone('61', '77777-6666', 'Tim', 'Celular');

// Criando alguns contatos
const contato1 = new Contato(new Date('2001-01-01'), 'Fulano', [tel1])
const contato2 = new ContatoComercial('Vendas', 'Vendedor', new Date('2015-07-27'), 'Ciclano', [tel2])
const contato3 = new EContato('www.fulano.com', 'fulano@email.com', new Date('2001-01-01'), 'Beltrano', [tel3])

// Criando a agenda
const agenda = new Agenda('Minha Agenda');
agenda.CadastrarContato(contato1);
agenda.CadastrarContato(contato2);
agenda.CadastrarContato(contato3);

// Obter quantidade de contatos
console.log(agenda.ObterQuantidade());

// Buscar contato por número de telefone
const conatoEncontrato = agenda.BuscarPorNumero('99999-8888');
console.log(conatoEncontrato?.nome);

// Apagar contato
agenda.ApagarContato(contato1);

// Obter quantidade de contatos após apagar um contato
console.log(agenda.ObterQuantidade());
