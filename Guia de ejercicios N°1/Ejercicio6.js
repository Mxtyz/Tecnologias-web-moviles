// Desarrollar un algoritmo que permita ingresar un objeto representando un inventario de
// productos. Cada producto en el inventario debe tener como propiedades un nombre, un
// precio, y una cantidad de stock en formato de número entero. Se debe recorrer el inventario
// y verificar si el stock de alguno de los productos es inferior a 1000 unidades. Si existe algún
// producto con stock crítico (menos de 1000 unidades), mostrará un mensaje indicando cuál
// es ese producto y que el stock es crítico. Si todos los productos tienen un stock igual o
// superior a 1000 unidades, el programa mostrará un mensaje que indique que el inventario
// está en buen estado.

class producto {
  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
}

let inventario = [];

function agregar_producto(producto) {
  inventario.push(producto);
}

function recorrer_inventario() {
  let stock_critico = false;
  for (i = 0; i < inventario.length; i++) {
    let producto = inventario[i];
    if (producto.stock < 1000) {
      console.log(
        "El stock del producto " +
          producto.nombre +
          " se encuentra en nivel critico"
      );
      stock_critico = true;
    }
  }
  if (!stock_critico) {
    console.log("El inventario se encuentra en buen estado");
  }
}

agregar_producto(new producto("Producto 1", 1000, 1001));
agregar_producto(new producto("Producto 2", 2000, 1100));
agregar_producto(new producto("Producto 3", 3000, 1000));
agregar_producto(new producto("Producto 4", 4000, 2000));
agregar_producto(new producto("Producto 5", 5000, 30000));
agregar_producto(new producto("Producto 6", 6000, 1000));

recorrer_inventario();
