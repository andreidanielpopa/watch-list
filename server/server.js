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

app.get('/top-rated-tv-shows', async (req, res) => {
  var contador = 1;
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/tv/top_rated`, {
      params: {
        api_key: process.env.API_KEY,
        language: 'es-ES',
        page: 1
      }
    });

    const shows = response.data.results.map(show => ({
      id: show.id,
      title: contador++ + ". " + show.name,
      poster_path: `https://image.tmdb.org/t/p/original/${show.poster_path}`,
    }));
    
    res.json(shows);
  } catch (error) {
    console.error('Error fetching popular TV shows:', error);
    res.status(500).json({ error: 'Failed to fetch popular TV shows' });
  }
});

app.get('/popular-movies', async (req, res) => {
  
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular`, {
      params: {
        api_key: process.env.API_KEY,
        language: 'es-ES',
        page: 1
      }
    });

    const movies = response.data.results.map(movie => ({
      id: movie.id,
      title: movie.title,
      poster_path: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
    }));

    res.json(movies);
  } catch (error) {
    console.error('Error fetching popular TV movies:', error);
    res.status(500).json({ error: 'Failed to fetch popular TV movies' });
  }
});

app.get('/top-rated-movies', async (req, res) => {
  var contador = 1;
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated`, {
      params: {
        api_key: process.env.API_KEY,
        language: 'es-ES',
        page: 1
      }
    });

    const movies = response.data.results.map(movie => ({
      id: movie.id,
      title: contador++ + ". " + movie.title,
      poster_path: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
    }));
    
    res.json(movies);
  } catch (error) {
    console.error('Error fetching popular TV movies:', error);
    res.status(500).json({ error: 'Failed to fetch popular TV movies' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
