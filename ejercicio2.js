function numeroMayor(array) {
    // Si el array está vacío, devolvemos null o algo, pero asumimos que tiene números
    if (array.length === 0) {
        return null; // Por si acaso, si no hay números
    }
    
    // Empezamos asumiendo que el primer número es el mayor
    let mayor = array[0];
    
    // Usamos un bucle for para revisar cada número del array
    // i empieza en 1 porque ya tomamos el 0 como mayor
    for (let i = 1; i < array.length; i++) {
        // Si el número actual es más grande que el mayor actual, lo cambiamos
        if (array[i] > mayor) {
            mayor = array[i];
        }
    }
    
    // Al final, devolvemos el mayor
    return mayor;
}
// Ahora probamos la función con el ejemplo del ejercicio
// Llamamos a numeroMayor con [5, 2, 9, 1] y mostramos el resultado en la consola
console.log(numeroMayor([5, 2, 9, 1])); // Esto debería mostrar 9