// Esta función se llama combinarObjetos y recibe dos objetos
function combinarObjetos(objeto1, objeto2) {
    // Creamos un nuevo objeto vacío donde vamos a combinar las propiedades
    let nuevoObjeto = {};
    
    // Primero, copiamos todas las propiedades de objeto1 al nuevo objeto
    for (let clave in objeto1) {
        nuevoObjeto[clave] = objeto1[clave];
    }
    
    // Luego, copiamos todas las propiedades de objeto2 al nuevo objeto
    // Si hay claves iguales, objeto2 sobrescribe
    for (let clave in objeto2) {
        nuevoObjeto[clave] = objeto2[clave];
    }
    
    // Devolvemos el nuevo objeto combinado
    return nuevoObjeto;
}

// Ahora probamos la función con el ejemplo del ejercicio
// Llamamos a combinarObjetos con { a: 1 } y { b: 2 }, y mostramos el resultado en la consola
console.log(combinarObjetos({ a: 1 }, { b: 2 })); // Esto debería mostrar { a: 1, b: 2 }
