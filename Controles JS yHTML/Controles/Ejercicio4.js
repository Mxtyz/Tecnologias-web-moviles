//Crear una funcion que calcule el total de una factura tras aplicarle el IVA. La funcion debe recibir
//la cantidad sin IVA y el porcentaje de IVA a aplicar, y devolver el total de la factura (la cantidad
//y porcentaje debe ingresar el usuario por navegador). si se invoca la funcion sin pasarle el porcentaje
//de IVA, debera aplicar un 19% por defecto.

//Se ingresan la cantidad sin IVA y el porcentaje 
const cantidad = parseFloat(prompt("Ingrese la cantidad sin IVA:"))
const porcentaje = parseFloat(prompt("Ingrese el porcentaje, por defecto 19% o mayor:"))

//Funcion para calcular el total de la factura
function calcularIVA(cantidad, porcentaje){
    const total = cantidad * (1 + (porcentaje / 100));
    return total;
}
 const totalfactura = calcularIVA(cantidad, porcentaje);
alert(`El total de la factura es: ${totalfactura}`);
