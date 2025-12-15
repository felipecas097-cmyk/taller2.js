// Función para ordenar un array de números de menor a mayor usando Bubble Sort.
function ordenarArray(array) {
    // Bucle externo: repite el proceso tantas veces como elementos haya.
    for (let i = 0; i < array.length; i++) {
        // Bucle interno: compara cada par de elementos uno al lado del otro.
        for (let j = 0; j < array.length - 1; j++) {
            // Si el elemento actual es mayor que el siguiente, los cambio de lugar.
            if (array[j] > array[j + 1]) {
                // Guardo el primero en una variable temporal.
                let temp = array[j];
                // Pongo el segundo en el lugar del primero.
                array[j] = array[j + 1];
                // Pongo el guardado en el lugar del segundo.
                array[j + 1] = temp;
            }
        }
    }
    
    // Devuelvo el array ya ordenado.
    return array;
}

// Prueba con un array desordenado.
let miArray = [5, 3, 8, 1, 2];
let resultado = ordenarArray(miArray);

console.log("Array ordenado: " + resultado);  // Debería ser [1, 2, 3, 5, 8]