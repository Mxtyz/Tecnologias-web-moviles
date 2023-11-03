// Desarrollar un programa en JavaScript y HTML para calcular el Índice de Masa Corporal (IMC) y otros
// datos de salud de pacientes. El programa debe permitir ingresar los siguientes datos de cada
// paciente:
// 1. Nombre del paciente
// 2. Peso del paciente en kilogramos.
// 3. Altura del paciente en metros (con punto decimal)
// 4. Edad del paciente en años
// 5. Permite seleccionar el género del paciente (masculino o femenino).
// 6. Nivel de actividad física del paciente (sedentario, moderado o activo).
function calcularIMC() {
    var nombre = document.getElementById('nombre').value;
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var edad = parseInt(document.getElementById('edad').value);
    var genero = document.querySelector('input[name="genero"]:checked').value;
    var actividad = document.getElementById('actividad').value;

    var imc = peso / (altura * altura);

    var resultado = "Nombre: " + nombre + "<br>";
    resultado += "IMC: " + imc.toFixed(2) + "<br>";

    document.getElementById('resultado').innerHTML = resultado;
}
