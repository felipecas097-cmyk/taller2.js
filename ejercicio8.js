// Esta función se llama agregarPropiedad y recibe un objeto, una clave y un valor
function agregarPropiedad(objeto, clave, valor) {
    // Agregamos la nueva propiedad al objeto usando la clave y el valor
    objeto[clave] = valor;
    
    // Devolvemos el objeto con la nueva propiedad
    return objeto;
}
// Ahora probamos la función con el ejemplo del ejercicio
// Creamos el objeto y llamamos a la función
let objeto = { nombre: "Luis" };
console.log(agregarPropiedad(objeto, "edad", 25)); // Esto debería mostrar { nombre: "Luis", edad: 25 }
