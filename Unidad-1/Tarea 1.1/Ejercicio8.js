function filtrarDisponibles(productos, categoria) {
  return productos.filter(p => p.categoria === categoria && p.stock > 0);
}

const productos = [
  { nombre: 'Camisa', categoria: 'ropa', stock: 10 },
  { nombre: 'Pantalón', categoria: 'ropa', stock: 0 },
  { nombre: 'Televisor', categoria: 'electrónica', stock: 5 }
];

const resultado = filtrarDisponibles(productos, 'ropa');

console.log(" Resultado en formato tabla:");
console.table(resultado);

console.log(" Resultado en formato arreglo:");
console.log(`[${resultado.map(p => `{ nombre: '${p.nombre}', categoria: '${p.categoria}', stock: ${p.stock} }`).join(', ')}]`);
