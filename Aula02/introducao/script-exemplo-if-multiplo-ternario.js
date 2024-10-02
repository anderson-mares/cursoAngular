//Declarando nossas variáveis
var idade = 30;
var estado = "DF";
//Testando nossa variavel utlizando operador ternario
var ternario = idade > 30 ? "velho" : "novo";
//Utilizando IF Multiplo
if (estado === "DF") {
    console.log("Distrito Federal");
}
else if (estado === "SP") {
    console.log("São Paulo");
}
else if (estado === "RJ") {
    console.log("Rio de Janeiro");
}
else if (estado === "GO") {
    console.log("Goiás");
}
else {
    console.log("Outro estado");
}
