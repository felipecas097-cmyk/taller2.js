// Esta función se llama promedioNotas y recibe un objeto estudiante
function promedioNotas(estudiante) {
    // Accedemos al array de notas del estudiante
    let notas = estudiante.notas;
    
    // Si no hay notas, devolvemos 0 para evitar errores
    if (notas.length === 0) {
        return 0;
    }
    
    // Empezamos con una variable suma en 0 para sumar todas las notas
    let suma = 0;
    
    // Usamos un bucle for para sumar cada nota
    for (let i = 0; i < notas.length; i++) {
        suma = suma + notas[i];
    }
    
    // Calculamos el promedio dividiendo la suma por la cantidad de notas
    let promedio = suma / notas.length;
    
    // Devolvemos el promedio
    return promedio;
}

// Ahora probamos la función con el ejemplo del ejercicio
// Creamos el objeto estudiante y llamamos a la función
let estudiante = { nombre: "Ana", notas: [80, 90, 70] };
console.log(promedioNotas(estudiante)); // Esto debería mostrar 80