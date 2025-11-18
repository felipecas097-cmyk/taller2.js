// Esta función se llama buscarElemento y recibe un array y un elemento a buscar
function buscarElemento(array, elemento) {
    // Usamos un bucle for para revisar cada elemento del array
    for (let i = 0; i < array.length; i++) {
        // Si el elemento actual del array es igual al que buscamos, devolvemos true
        if (array[i] === elemento) {
            return true;
        }
    }
    
    // Si terminamos el bucle sin encontrar nada, devolvemos false
    return false;
}
// Ahora probamos la función con el ejemplo del ejercicio
// Llamamos a buscarElemento con ["rojo", "azul"] y "azul", y mostramos el resultado en la consola
console.log(buscarElemento(["rojo", "azul"], "azul")); // Esto debería mostrar true
