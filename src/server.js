const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8081;
app.use(cors());

app.use(cors({
    origin: 'http://localhost:8084', // Ajusta la URL de tu aplicación cliente
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));

  app.use(bodyParser.json());

// Simulación de una base de datos simple para almacenar los datos de inicio de sesión
const users = [];

// Ruta para manejar el inicio de sesión
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Aquí puedes realizar la lógica para verificar las credenciales en la base de datos
    // Por simplicidad, aquí solo se agrega el usuario a la "base de datos" si no existe
    if (!users.some(user => user.username === username)) {
        users.push({ username, password });

        res.header('Access-Control-Allow-Origin', 'http://localhost:8084'); // Ajusta la URL de la aplicación cliente
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.listen(port, () => {
    console.log(`Servidor proxy escuchando en http://localhost:${port}`);
});
