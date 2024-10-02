//Criando uma função que recebe 2 valores e retorna aoenas o maior valor entre ambas
function maximo(num1, num2) {
    if (num1 >= num2) {
        return num1;
    }
    else {
        return num2;
    }
}
var maiorValor = maximo(10, 15);
console.log(maiorValor);
