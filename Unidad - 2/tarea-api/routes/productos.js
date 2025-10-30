const express = require('express');
const fs = require('fs');
const router = express.Router();
const dataFile = './productos.json';

// Leer productos
const leerProductos = () => {
  try {
    const data = fs.readFileSync(dataFile);
    return JSON.parse(data);
  } catch {
    return [];
  }
};

// Guardar productos
const guardarProductos = (productos) => {
  fs.writeFileSync(dataFile, JSON.stringify(productos, null, 2));
};

// GET /productos
router.get('/', (req, res) => {
  res.json(leerProductos());
});

// GET /productos/disponibles
router.get('/disponibles', (req, res) => {
  const disponibles = leerProductos().filter(p => p.disponible === true);
  res.json(disponibles);
});

// GET /productos/:id
router.get('/:id', (req, res) => {
  const producto = leerProductos().find(p => p.id === parseInt(req.params.id));
  if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });
  res.json(producto);
});

// POST /productos
router.post('/', (req, res) => {
  const { nombre, precio, descripcion, disponible } = req.body;
  if (!nombre) return res.status(400).json({ error: 'El nombre es obligatorio' });
  if (typeof precio !== 'number' || precio <= 0)
    return res.status(400).json({ error: 'El precio debe ser un número mayor a 0' });
  if (!descripcion || descripcion.length < 10)
    return res.status(400).json({ error: 'La descripción debe tener al menos 10 caracteres' });

  const productos = leerProductos();
  const nuevo = {
    id: productos.length ? productos[productos.length - 1].id + 1 : 1,
    nombre,
    precio,
    descripcion,
    disponible: disponible ?? true,
    fecha_ingreso: new Date().toISOString()
  };
  productos.push(nuevo);
  guardarProductos(productos);
  res.status(201).json(nuevo);
});

// PUT /productos/:id
router.put('/:id', (req, res) => {
  const productos = leerProductos();
  const index = productos.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Producto no encontrado' });

  const { nombre, precio, descripcion, disponible } = req.body;
  if (nombre && nombre.trim() === '')
    return res.status(400).json({ error: 'El nombre no puede estar vacío' });
  if (precio && (typeof precio !== 'number' || precio <= 0))
    return res.status(400).json({ error: 'El precio debe ser mayor a 0' });
  if (descripcion && descripcion.length < 10)
    return res.status(400).json({ error: 'La descripción debe tener al menos 10 caracteres' });

  productos[index] = {
    ...productos[index],
    nombre: nombre ?? productos[index].nombre,
    precio: precio ?? productos[index].precio,
    descripcion: descripcion ?? productos[index].descripcion,
    disponible: disponible ?? productos[index].disponible
  };
  guardarProductos(productos);
  res.json(productos[index]);
});

// DELETE /productos/:id
router.delete('/:id', (req, res) => {
  const productos = leerProductos();
  const nuevos = productos.filter(p => p.id !== parseInt(req.params.id));
  if (productos.length === nuevos.length)
    return res.status(404).json({ error: 'Producto no encontrado' });

  guardarProductos(nuevos);
  res.json({ mensaje: 'Producto eliminado correctamente' });
});

module.exports = router;
