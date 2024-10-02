//Criando uma função que recebe 2 valores e retorna aoenas o maior valor entre ambas
function maximo(num1 : number, num2 : number) : number {

    if (num1 >= num2) {
        return num1;
    } else {
        return num2;
    }

}

let maiorValor = maximo(10, 15);

console.log(maiorValor);