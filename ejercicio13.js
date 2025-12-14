// Declaro la función con el parámetro llamado 'miLista'.
function eliminarDuplicados(miLista) {
    // Creo un array vacío para el resultado.
    let resultado = [];
    
    // Recorro cada elemento de 'miLista'.
    for (let i = 0; i < miLista.length; i++) {
        let elemento = miLista[i];
        
        // Verifico si 'elemento' ya está en 'resultado'.
        // Empiezo asumiendo que no existe.
        let yaExiste = false;
        
        // Recorro todo 'resultado' para buscar si 'elemento' está ahí.
        // (Sin usar break, así que el bucle va hasta el final).
        for (let j = 0; j < resultado.length; j++) {
            if (elemento === resultado[j]) {
                yaExiste = true;
                // No uso break, así que el bucle sigue, pero ya marqué que existe.
            }
        }
        
        // Si no existe, lo agrego.
        if (!yaExiste) {
            resultado.push(elemento);
        }
    }
    
    // Devuelvo el resultado.
    return resultado;
}

// Pruebo con el ejemplo.
let miArray = [1, 2, 2, 3];
let arraySinDuplicados = eliminarDuplicados(miArray);

console.log("Lista inicial: " + miArray);
console.log("Lista sin repeticiones: " + arraySinDuplicados);
