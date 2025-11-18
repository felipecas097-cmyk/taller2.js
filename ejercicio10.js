// Esta función se llama contarPropiedades y recibe un objeto
function contarPropiedades(objeto) {
    // Empezamos con un contador en 0
    let contador = 0;
    
    // Usamos un bucle for...in para recorrer cada propiedad del objeto
    // "j" es el nombre que le damos a la variable que representa cada propiedad
    for (let j in objeto) {
        // Cada vez que encontramos una propiedad, aumentamos el contador en 1
        contador = contador + 1;
    }
    
    // Devolvemos el contador con el número de propiedades
    return contador;
}

// Ahora probamos la función con el ejemplo del ejercicio
// Llamamos a contarPropiedades con { a: 1, b: 2 } y mostramos el resultado en la consola
console.log(contarPropiedades({ a: 1, b: 2 })); // Esto debería mostrar 2
