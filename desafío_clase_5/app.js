/*
1. CREAR UN ARRAY DE PRODUCTOS
2. MOSTRAR SU CONTENIDO CON UN BUCLE FOR, USANDO CONSOLE.LOG
3. AGREGAR UN PRODUCTO AL STOCK
4. QUITAR UN PRODUCTO DEL STOCK
*/

let productos = ["Heladera", "Lavarropas", "Microondas", "Tostadora"];

console.log("Array Inicial:");
productos.forEach((producto) => {
  console.log(producto);
});

productos.pop();

console.log("Array Final:");
productos.forEach((producto) => {
  console.log(producto);
});
