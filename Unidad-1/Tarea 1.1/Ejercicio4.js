function modificarPersona(persona, nuevoNombre) {
  return { ...persona, nombre: nuevoNombre, edad: persona.edad + 1 };
}

const persona = { nombre: 'Luis', edad: 30 };
console.log(modificarPersona(persona, 'Carlos'));
