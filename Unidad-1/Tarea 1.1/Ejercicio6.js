function combinarListasSinRepetir(lista1, lista2) {
  return [...new Set([...lista1, ...lista2])];
}

const lista1 = ['manzana', 'pera', 'banana'];
const lista2 = ['pera', 'uva', 'manzana', 'sandía'];

console.log(combinarListasSinRepetir(lista1, lista2));
