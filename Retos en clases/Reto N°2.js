// Crear un algoritmo capaz de solicitar 3 notas de un alumno por
// pantalla y obtener el promedio ponderado. Este promedio
// ponderado es de la siguiente forma:
// Nota 1 = 40% 
// Nota 2 = 30%
// Nota 3 = 30%
// Si el estudiante obtiene un promedio inferior a 3.95 se debe
// imprimir por pantalla que ha reprobado la asignatura, si obtuvo
// un promedio entre 3.95 a 4.94 el estudiante va a examen. Si la
// nota es igual o superior a 4.95 el alumno se exime de la
// asignatura.

//Funcion para ponderar las notas 
function PromedioPonderado(nota1, nota2, nota3) { 
    return (nota1 * 0.4 + nota2 * 0.3 + nota3 * 0.3).toFixed(2); 
}
 
//Funcion para ver si esta eximido o reprovado o tiene que dar examen 
function Desempeño(promedio) { 
    if (promedio < 3.95) { 
        return "Esta Reprobado";
    } else if (promedio >= 3.95 && promedio <= 4.94) { 
        return "Tiene que dar examen"; 
    } else { 
        return "Esta Eximido"; 
    }
}

//Ingresar las notas
let nota1 = parseFloat(prompt("Ingrese la nota 1: (40%):")); 
let nota2 = parseFloat(prompt("Ingrese la nota 2: (30%):")); 
let nota3 = parseFloat(prompt("Ingrese la nota 3: (30%):")); 

//Se calcula el promedio
let promedio = PromedioPonderado(nota1, nota2, nota3); 
 
let resultado = `Tu promedio ponderado es: ${promedio}`; 
let estado = `El alumno ${Desempeño(promedio)}`; 
 
// Se muestran los resultados
alert(resultado); 
alert(estado); 
