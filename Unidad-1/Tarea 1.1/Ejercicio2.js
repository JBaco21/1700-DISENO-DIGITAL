function obtenerUsuario(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const nombres = ['Juan', 'María', 'Pedro', 'Ana'];
      resolve({ id, nombre: nombres[id] });
    }, 1000);
  });
}

obtenerUsuario(0)
  .then(usuario1 => {
    return obtenerUsuario(1).then(usuario2 => {
      console.log(`Usuarios cargados: ${usuario1.nombre} y ${usuario2.nombre}`);
    });
  });
