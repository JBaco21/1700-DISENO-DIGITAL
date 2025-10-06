function verificarMayoresDeEdad(edades) {
  return edades.every(e => e >= 18);
}

const edades = [19, 25, 32, 17];
console.log(verificarMayoresDeEdad(edades));
