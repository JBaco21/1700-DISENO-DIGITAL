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

console.log("📋 Resultado en formato tabla:");
console.table(resultado);

console.log("🧾 Resultado en formato arreglo:");
console.log(`[${resultado.map(obj => `{ id: ${obj.id}, nombre: '${obj.nombre}' }`).join(', ')}]`);
