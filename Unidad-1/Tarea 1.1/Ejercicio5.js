function eliminarDuplicados(arr, prop) {
  const mapa = new Map(arr.map(item => [item[prop], item]));

  return Array.from(mapa.values());
}

const elementos = [
  { id: 1, nombre: 'A' },
  { id: 2, nombre: 'B' },
  { id: 1, nombre: 'A' }
];

const resultado = eliminarDuplicados(elementos, 'id');
console.table(resultado);
