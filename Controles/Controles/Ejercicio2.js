//Escribir un programa en el que se pregunte al usuario por una frase y una letra, y muestre
//por pantalla el numero de veces que aparece la letra en la frase.



//Ingresar la frase y letra por navegador
let palabra = prompt("Ingrese una frase:");
let letra = prompt("Ingrese una letra:");

//Funcion que cuenta la cantidad de letras que tiene la frase 
function contarletra(palabra, letra){
    let contador=0;
    for( let i = 0; i < palabra.length; i++) {
        if (palabra[i].toLowerCase() === letra.toLowerCase()){
            contador++;
        }
    }
    return contador;
}

//Se guarda en una variable para luego que se imprima en el navegador 
let repetidas = contarletra(palabra, letra);
alert(`La letra '${letra}' aparece ${repetidas} veces en la frase.`);

