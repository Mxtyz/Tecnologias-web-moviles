// Solicitar al usuario que ingrese una serie de números separados por comas. Encontrar y
// mostrar el número más grande entre los números ingresados.

//Se inicia un bucle, en caso que una persona ingrese un dato erroneo 
while (true) {
  numeros = prompt("Ingrese sus numeros, (Separados por comas):");
  
//se restringe que solamente se ingrsen numeros y no palabras o signos 
  if (/^[0-9,]*$/.test(numeros)){
    var listaNumeros = numeros.split(',').map(Number);
    var mayor = Math.max(...listaNumeros);
    alert(`El numero mas grande es: ${mayor}`);
    //Se detiene el bucle cuando se ingresa un valor valido 
    break; 
  } else {
    alert("Error, Ingrese SOLO números separados por comas");
  }
}
