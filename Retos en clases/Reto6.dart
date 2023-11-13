import 'dart:io';

bool esPrimo(int numero) {
  if (numero < 2) {
    return false;
  }
  for (int i = 2; i <= (numero / 2).floor(); i++) {
    if (numero % i == 0) {
      return false;
    }
  }
  return true;
}

String esParOImpar(int numero) {
  return (numero % 2 == 0) ? "par" : "impar";
}

void main() {
  try {
    // Solicitar al usuario que ingrese un número
    stdout.write("Ingrese un número entero: ");
    int numero = int.parse(stdin.readLineSync()!);

    // Verificar si el número es primo
    if (esPrimo(numero)) {
      print("$numero es un número primo.");
    } else {
      print("$numero no es un número primo.");
    }

    // Verificar si el número es par o impar
    String parOImpar = esParOImpar(numero);
    print("$numero es un número $parOImpar.");
  } catch (FormatException) {
    print("Por favor, ingrese un número entero válido.");
  }
}

