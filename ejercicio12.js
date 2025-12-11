// Definimos la función mejorEstudiante que recibe un array de objetos estudiantes
function mejorEstudiante(listaEstudiantes) {
  // Asumimos que el array no está vacío y tomamos la nota del primer estudiante como máxima inicial
  let notaMaxima = listaEstudiantes[0].nota;  // Inicializamos con la nota del primer estudiante
  let nombreMejor = listaEstudiantes[0].nombre;  // Inicializamos con el nombre del primer estudiante
  
  // Usamos un bucle for para iterar sobre los estudiantes restantes (empezando desde el segundo)
  for (let i = 1; i < listaEstudiantes.length; i++) {
    // Accedemos al objeto estudiante actual
    let estudiante = listaEstudiantes[i];
    
    // Usamos un condicional if para verificar si la nota del estudiante actual es mayor que la nota máxima actual
    if (estudiante.nota > notaMaxima) {
      // Si es mayor, actualizamos la nota máxima y el nombre
      notaMaxima = estudiante.nota;
      nombreMejor = estudiante.nombre;
    }
  }
  
  // Retornamos el nombre del estudiante con la nota más alta
  return nombreMejor;
}

// Ejemplo de uso: Creamos un array de objetos estudiantes (cada objeto tiene nombre y nota)
let listaEstudiantes = [
  { nombre: "Ana", nota: 85 },
  { nombre: "Carlos", nota: 92 },
  { nombre: "María", nota: 78 },
  { nombre: "Pedro", nota: 96 }
];

// Llamamos a la función y mostramos el resultado en la consola
console.log("El estudiante con la nota más alta es: " + mejorEstudiante(listaEstudiantes));
