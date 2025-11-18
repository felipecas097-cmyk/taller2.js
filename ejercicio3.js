// Esta función se llama contarPares y recibe un array de números
function contarPares(array) {
    // Empezamos con un contador en 0, aquí vamos a contar los pares
    let contador = 0;

     // Usamos un bucle for para revisar cada número del array
    for (let i = 0; i < array.length; i++) {
        // Revisamos si el número actual es par (si al dividirlo entre 2 el resto es 0)
        if (array[i] % 2 === 0) {
            // Si es par, aumentamos el contador en 1
            contador = contador + 1;
        }
    }

       // Al final, devolvemos el contador con la cantidad de pares
    return contador;
}
// Ahora probamos la función con el ejemplo del ejercicio
// Llamamos a contarPares con [3, 8, 2, 10] y mostramos el resultado en la consola
console.log(contarPares([3, 8, 2, 10])); // Esto debería mostrar 3
