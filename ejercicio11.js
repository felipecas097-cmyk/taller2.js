// Esta función se llama calcularRectangulo y recibe ancho y alto
function calcularRectangulo(ancho, alto) {
    // Calculamos el área multiplicando ancho por alto
    let area = ancho * alto;
    
    // Calculamos el perímetro sumando ancho y alto, y multiplicando por 2
    let perimetro = 2 * (ancho + alto);
    
    // Creamos un objeto con las propiedades area y perimetro
    let resultado = {
        area: area,
        perimetro: perimetro
    };
    
    // Devolvemos el objeto con los cálculos
    return resultado;
}

// Ahora probamos la función con el ejemplo del ejercicio
// Llamamos a calcularRectangulo con 3 y 4, y mostramos el resultado en la consola
console.log(calcularRectangulo(3, 4)); // Esto debería mostrar { area: 12, perimetro: 14 }
