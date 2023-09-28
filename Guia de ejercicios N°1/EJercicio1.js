// Crear un algoritmo que solicite al usuario un número entero positivo. Luego, utilizar un ciclo
// para calcular la suma de todos los números pares desde 1 hasta el número ingresado por el
// usuario. Mostrar el resultado de la operación en el navegador.

let numero;

while (true) {
  numero = parseInt(prompt("Ingrese un numero entero positivo: "));
  if (isNaN(numero) || numero <= 0) {
    alert(
      "El valor no es valido,ingrese nuervamentre un numero entero positivo"
    );
  } else {
    break;
  }
}

let numerosPares = 0;
for (i = 0; i <= numero; i++) {
  if (i % 2 === 0) {
    numerosPares += i;
  }
}
alert(`La suma de los numeros pares del ${numero} es igual a :${numerosPares}`);
