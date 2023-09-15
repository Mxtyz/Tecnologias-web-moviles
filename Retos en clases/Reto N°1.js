//Realizar un programa en JavaScript con lo aprendido en clases
//que permita ingresar un número por pantalla y saber si es un
//número par o número impar.

var numero = prompt("Introduce un número:");
var resultado = parImpar(numero);
alert("El número "+numero+" es "+resultado);

function parImpar(numero) {
    if(numero % 2 == 0){
        return "par"
    }
    else {
        return "impar"
    }
}