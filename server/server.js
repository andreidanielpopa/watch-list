require('dotenv').config();

const express = require('express');
const cors = require('cors');
const axios = require('axios');
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
  })

// Ruta para obtener las 20 series más populares
app.get('/popular-tv-shows', async (req, res) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/tv/popular`, {
      params: {
        api_key: process.env.API_KEY,
        language: 'es-ES',
        page: 1
      }
    });

    const shows = response.data.results.map(show => ({
      id: show.id,
      title: show.name,
      poster_path: `https://image.tmdb.org/t/p/original/${show.poster_path}`,
    }));

    res.json(shows);
  } catch (error) {
    console.error('Error fetching popular TV shows:', error);
    res.status(500).json({ error: 'Failed to fetch popular TV shows' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
