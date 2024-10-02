//Declarando nossas variáveis
let idade : number = 30;
let estado : string = "DF";

//Testando nossa variavel utlizando operador ternario
let ternario : string = idade > 30 ? "velho" : "novo";

//Utilizando IF Multiplo
if (estado === "DF") {
    console.log("Distrito Federal");
} else if (estado === "SP") {
    console.log("São Paulo");
} else if (estado === "RJ") {
    console.log("Rio de Janeiro");
} else if (estado === "GO") {
    console.log("Goiás");
} else {
    console.log("Outro estado");
}