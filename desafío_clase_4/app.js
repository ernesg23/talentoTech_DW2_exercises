// Crea una función llamada sumarProductos() que acepte dos parámetros: precioUnitario y cantidadDeseada. CC
// La función debe calcular y devolver el total gastado en un producto multiplicando el precio por la cantidad comprada.
let nombreProducto="Pelota Messi", precio=5000, cantidad;

function sumarProductos(precioUnitario, cantidadDeseada)
{
    return precioUnitario*cantidadDeseada
}

cantidad = parseInt(prompt(`¿Qué cantidad desea comprar de nuestro producto llamado '${nombreProducto}'?`))

alert(`El costo total de la compra es: ${sumarProductos(precio,cantidad)}, siendo el precio unitario ${precio}`)