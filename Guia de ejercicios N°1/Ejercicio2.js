// Desarrollar un contador de palabras, solicitando al usuario que ingrese una oración, para
// luego contar cuántas palabras hay en la oración. Mostrar la oración ingresada y el número
// de palabras en el navegador.


//Se pide que ingrese una oracion 
const oracion = prompt("Ingrese una oración:");

//Verificar si contiene solo letras y espacios y no numero o otro signo
if (/^[a-zA-Z\s]+$/.test(oracion)) {
  const palabras = oracion.split(' ').filter(Boolean).length;
  alert(`El número de palabras de la oracion es: ${palabras}`);
} else {
  alert("Error, Ingrese solo oraciones.");
}
