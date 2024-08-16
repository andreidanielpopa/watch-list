// server/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const sequelize = require('./config/db');
const Usuario = require('./models/Usuario');

// Middleware
app.use(express.json());
app.use(cors());

// Sincronizar base de datos
sequelize.sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });

// Rutas
app.get('/', (req, res) => res.send('Hello World!'));

// Ruta para obtener todos los usuarios
app.get('/users', async (req, res) => {
    try {
      const usuarios = await Usuario.findAll();
      res.json(usuarios);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  });  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
