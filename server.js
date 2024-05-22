const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 5000;

// Configuración de almacenamiento de multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Carpeta donde se guardarán los archivos
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Nombre del archivo con timestamp para evitar conflictos
  },
});

const upload = multer({ storage: storage });

// Endpoint para la subida de archivos
app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully');
});

// Servir los archivos estáticos del frontend
app.use(express.static(path.join(__dirname, 'build')));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
