const express = require('express');
const fetch = require('node-fetch');

const app = express();

// Ruta para obtener el listado de contactos
app.get('/contactos', (req, res) => {
  // Realiza la solicitud HTTP a la página
  fetch('http://www.raydelto.org/agenda.php')
    .then(response => response.json())
    .then(data => {
      // Devuelve los contactos obtenidos como respuesta
      res.json(data);
    })
    .catch(error => {
      // Maneja cualquier error que ocurra durante la solicitud
      console.error('Error al obtener los contactos:', error);
      res.status(500).json({ error: 'Error al obtener los contactos' });
    });
});

// Ruta para almacenar un nuevo contacto
app.post('/contactos', (req, res) => {
  // Aquí puedes implementar la lógica para almacenar el nuevo contacto
  // utilizando los datos recibidos en el cuerpo de la solicitud (req.body)

  // Devuelve una respuesta de éxito
  res.json({ message: 'Contacto almacenado exitosamente' });
});

// Inicia el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});