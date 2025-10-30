const express = require('express');
const app = express();
const productosRoutes = require('./routes/productos');

app.use(express.json());
app.use('/productos', productosRoutes);

// Manejo de ruta no encontrada
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
