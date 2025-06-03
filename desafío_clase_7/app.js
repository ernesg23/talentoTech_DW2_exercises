/*
Crea un archivo HTML básico que contenga un título (h1) y un párrafo (p).
Ambas etiquetas deben contener un artículo id, para el h1 usamos
id="nombreProducto", y para el p usamos id="precioProducto".
Al cargar la página queremos que el precio inicial de "$500"
cambie a "$450" utilizando las propiedades getElementById() e innerText.
También podemos modificar estilos del título mediante querySelector
como el color del título a azul.
*/

window.onload = function () {
  document.getElementById("precioProducto").innerText =
    "El precio del producto es: $450";
    
  document.querySelector("#nombreProducto").style.color = "blue";
};
