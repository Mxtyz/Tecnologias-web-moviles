// Desarrollar un programa que genere contraseñas seguras y aleatorias para proteger cualquier
// cuenta personal que el usuario desee. Simplemente el usuario ingresa los parámetros deseados y va
// a obtener una contraseña única y robusta.


//Funcion para verificar que la contraseña sea de caracteres entre 8 a 20.
 function Contrasena() {
    var longitud = parseInt(prompt("Indique la longitud de la contraseña (entre 8 y 20 caracteres):"));
    if (longitud < 8 || longitud > 20) {
      alert("La longitud de la contraseña debe estar entre 8 y 20 caracteres.");
      return;
    }
//Se le pregunta al usuario si a su contraseña se le aplica los siguientes condiciones.
    var mayusculas = confirm("¿Incluir mayúsculas?");
    var minusculas = confirm("¿Incluir letras minúsculas?");
    var numeros = confirm("¿Incluir numeros?");
    var especial = confirm("¿Incluir caracteres especiales?")
//Se restringe  los caracteres que puede tener la contraseña.
    var caracteres = "";
    if (mayusculas) caracteres += "QWERTYUIOPASDFGHJKLÑZXCVBNM";
    if (minusculas) caracteres += "qwertyuiopasdfghjklñzxcvbnm";
    if (numeros) caracteres += "124567890"
    if (especial) caracteres += "!#$%&/()[]{}.,¿?+-¡"
    
//Se restinge que se cumpla que se seleccione algun caracter 
    if (caracteres === "") {
        alert("Debe selecionar al menos un tipo de caracter.");
        return;
    }
//Se genera la contraseña de forma aleatoria 
    var contraseña = "";
    for (var i = 0; i < longitud; i++){
        var aleatoria = caracteres[Math.floor(Math.random()* caracteres.length)];
        contrasena += aleatoria;
    }
//Se muestra en pantalla la contraseña
    alert("La contraseña generada es:" + contraseña);

    Contrasena();