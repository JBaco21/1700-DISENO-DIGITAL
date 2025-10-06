function contarPalabras(palabras) {
  return palabras.reduce((contador, palabra) => {
    contador[palabra] = (contador[palabra] || 0) + 1;
    return contador;
  }, {});
}

const palabras = ['hola', 'adiós', 'hola', 'gracias', 'hola', 'gracias'];
console.log(contarPalabras(palabras));
