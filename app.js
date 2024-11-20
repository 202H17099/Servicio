const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

// Servir index.html desde la carpeta "app"
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'app', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
