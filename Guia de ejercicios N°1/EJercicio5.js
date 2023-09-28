// Realizar un programa que permita al usuario ingresar su estatura y peso, para que se
// muestre en el navegador su IMC correspondiente. Además de mostrar el IMC, indicar si está
// en la categoría de: “Bajo Peso”, “Peso Normal” o “Sobrepeso”.
// IMC Estado
// Menor a 18.5           Bajo Peso
// 18.5 - 24.9            Normal
// Mayor 24.9             Sobrepeso

let estatura;
let peso;

while (true) {
  estatura = parseFloat(prompt("Ingrese su Estatura: "));
  if (isNaN(estatura) || estatura < 0) {
    alert("la estatura ingresada no es valida,intentelo de nuevo");
  } else {
    break;
  }
}
while (true) {
  peso = parseFloat(prompt("Ingrese su Peso: "));
  if (isNaN(peso) || peso < 0) {
    alert("El peso ingresado no es valido,intentelo de nuevo");
  } else {
    break;
  }
}

let IMC = (peso / estatura ** 2).toFixed(2);

if (IMC < 18.5) {
  alert("su IMC es " + IMC + " ,usted se encuentra bajo peso");
} else if (IMC >= 18.5 && IMC <= 25.9) {
  alert("Su IMC es " + IMC + " Usted tiene un peso normal");
} else {
  alert("Su IMC es " + IMC + ",Usted se encuentra con sobrepeso");
}
