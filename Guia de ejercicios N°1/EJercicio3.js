// Crear un programa que solicite al usuario una contraseña y verifique si cumple con ciertos
// criterios de seguridad. La contraseña debe cumplir con los siguientes requisitos para
// considerarse válida:
// a. Debe tener al menos 8 caracteres de longitud.
// b. Debe contener al menos una letra mayúscula.
// c. Debe contener al menos un número.
// d. Debe incluir al menos un carácter especial, como: !@#$%^&*()_+{}[]:;<>,.?~\-

let contrasena;

while (true) {
  contrasena =
    prompt(`Ingrese una contraseña que cumpla los siguientes requisitos:
1.Debe tener al menos 8 caracteres de longitud.
2.Debe contener al menos una letra mayúscula.
3.Debe contener al menos un número.
4.Debe incluir al menos un carácter especial, como: !@#$%^&*()_+{}[]:;<>,.?~\-`);

  if (contrasena.length < 8) {
    alert("La contraseña es muy corta");
  } else if (!/[A-Z]/.test(contrasena)) {
    alert("la contraseña debe contener al menos una letra mayúscula");
  } else if (!/\d/.test(contrasena)) {
    alert("la contraseña debe contener al menos un numero");
  } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\\-]/.test(contrasena)) {
    alert("la contraseña debe contener almenos uno caracter especial");
  } else {
    alert("La contraseña es correcta");
    break;
  }
}
