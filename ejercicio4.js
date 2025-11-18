// Esta función se llama invertirArray y recibe un array
function invertirArray(array) {
    // Creamos un nuevo array vacío donde vamos a poner los elementos invertidos
    let nuevoArray = [];
    
    // Usamos un bucle for que empieza desde el último elemento del array original
    // i va desde array.length - 1 (el último) hasta 0 (el primero), bajando de uno en uno
    for (let i = array.length - 1; i >= 0; i--) {
        // Agregamos el elemento actual del array original al nuevo array
        nuevoArray.push(array[i]);
    }
    
    // Al final, devolvemos el nuevo array invertido
    return nuevoArray;
}
// Ahora probamos la función con el ejemplo del ejercicio
// Llamamos a invertirArray con ["a", "b", "c"] y mostramos el resultado en la consola
console.log(invertirArray(["a", "b", "c"])); // Esto debería mostrar ["c", "b", "a"]
