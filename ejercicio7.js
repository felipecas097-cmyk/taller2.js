// Esta función se llama aprobados y recibe una lista de estudiantes (array de objetos)
function aprobados(listaEstudiantes) {
    // Creamos un nuevo array vacío donde vamos a poner solo los aprobados
    let aprobadosArray = [];
    
    // Usamos un bucle for para revisar cada estudiante en la lista
    for (let i = 0; i < listaEstudiantes.length; i++) {
        // Accedemos al estudiante actual
        let estudiante = listaEstudiantes[i];
        
        // Si la nota del estudiante es mayor o igual a 60, lo agregamos al nuevo array
        if (estudiante.nota >= 60) {
            aprobadosArray.push(estudiante);
        }
    }
    
    // Devolvemos el nuevo array con solo los aprobados
    return aprobadosArray;
}

// Ahora probamos la función con un ejemplo
// Creamos una lista de estudiantes con algunos aprobados y no
let listaEstudiantes = [
    { nombre: "Ana", nota: 80 },
    { nombre: "Juan", nota: 50 },
    { nombre: "Maria", nota: 70 },
    { nombre: "Pedro", nota: 45 }
];

// Llamamos a la función y mostramos el resultado en la consola
console.log(aprobados(listaEstudiantes)); // Esto debería mostrar [{ nombre: "Ana", nota: 80 }, { nombre: "Maria", nota: 70 }]
