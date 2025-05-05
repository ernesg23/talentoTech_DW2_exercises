// Trabajando con variables
// Creá 3 variables:
// -Una para signar el nombre del producto (nombreProducto).
// -Una para el precio por unidad (precioUnitario) con sus respectivos valores.
// -Y otra que almacenará la cantidad deseada por el usuario (cantidadDeseada).
// Creá un prompt donde se le pregunte al usuario la cantidad que desea comprar y que esa respuesta se almacene en cantidadDeseada.
// Luego calcular el costo total de la compra multiplicando el precioUnitario por la cantidadDeseada.
// utiliza alert() para informar al usuario sobre el costo total de su compra.

let nombreProducto="Pelota Messi", precioUnitario=5000, cantidadDeseada;

cantidadDeseada = parseInt(prompt(`¿Qué cantidad desea comprar de nuestro producto llamado '${nombreProducto}'?`))

alert(`El costo total de la compra es: ${precioUnitario*cantidadDeseada}, siendo el precio unitario ${precioUnitario}`)