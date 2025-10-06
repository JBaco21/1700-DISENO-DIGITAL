function agruparPorPropiedad(arr, prop) {
  return arr.reduce((grupo, item) => {
    const clave = item[prop];
    if (!grupo[clave]) grupo[clave] = [];
    grupo[clave].push(item);
    return grupo;
  }, {});
}

const datos = [
  { categoria: 'fruta', nombre: 'manzana' },
  { categoria: 'verdura', nombre: 'zanahoria' },
  { categoria: 'fruta', nombre: 'banana' },
  { categoria: 'verdura', nombre: 'lechuga' }
];

console.log(agruparPorPropiedad(datos, 'categoria'));
