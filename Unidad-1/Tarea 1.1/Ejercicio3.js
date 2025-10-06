function promedioPonderado(notas) {
  const total = notas.reduce((suma, n) => suma + n.valor * n.peso, 0);
  return total;
}

const notas = [
  { valor: 90, peso: 0.5 },
  { valor: 80, peso: 0.3 },
  { valor: 70, peso: 0.2 }
];

console.log(promedioPonderado(notas));
