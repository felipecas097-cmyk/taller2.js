// Esta función se llama sumarArray y recibe un array de números
function sumarArray(array) {
    // Empezamos con una variable llamada suma que vale 0, aquí vamos a guardar el total
    let suma = 0;
    
    // Usamos un bucle for para recorrer cada número del array
    // i es como un contador que empieza en 0 y va hasta el final del array
    for (let i = 0; i < array.length; i++) {
        // Sumamos el número actual del array a la variable suma
        suma = suma + array[i];
    }
    
    // Al final, devolvemos la suma total
    return suma;
}
// Ahora probamos la función con el ejemplo del ejercicio
// Llamamos a sumarArray con [1, 2, 3] y mostramos el resultado en la consola
console.log(sumarArray([1, 2, 3])); // Esto debería mostrar 6
    
    