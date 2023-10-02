// El programa debe cumplir con los siguientes requerimientos:
// 1. El usuario podrá ingresar el monto total de la boleta (monto en CLP) en un campo de texto.
// 2. Deberá existir un menú desplegable donde el usuario pueda seleccionar el porcentaje de
// propina deseado (por ejemplo, 10%, 15%, 20%).
// 3. Al hacer clic en un botón de "Calcular", el programa deberá realizar el cálculo de la propina.
// 4. El resultado del cálculo de la propina deberá mostrarse en pantalla, indicando el monto de la
// propina y el total a pagar incluyendo la propina.
// 5. El programa debe incluir validaciones para asegurar que el monto de la boleta sea un
// número válido y que se seleccione un porcentaje de propina válido.


function calcularPropina() {
    var monto = parseFloat(document.getElementById("monto").value);
    var porcentaje = parseFloat(document.getElementById("porcentaje").value);

    if (isNaN(monto) || isNaN(porcentaje)) {
        alert("Por favor, ingresa un monto y selecciona un porcentaje de propina válido.");
        return;
    }

    var propina = (monto * porcentaje) / 100;
    var totalConPropina = monto + propina;

    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <h2>Resultados:</h2>
        <p>Monto de la boleta: ${monto} CLP</p>
        <p>Propina (${porcentaje}%): ${propina.toFixed(2)} CLP</p>
        <p>Total a pagar: ${totalConPropina.toFixed(2)} CLP</p>
    `;
}

