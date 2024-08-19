import React, { useEffect, useState } from 'react';
import { fetchUsers, fetchPopularTVShows } from './services/api';

function App() {
  const [users, setUsers] = useState([]);
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const usersData = await fetchUsers();
      setUsers(usersData);
    };

    const getPopularTVShows = async () => {
      const showsData = await fetchPopularTVShows();
      console.log("Fetched TV Shows:", showsData);  // Añade esto para depuración
      setShows(Array.isArray(showsData) ? showsData : []);  // Asegúrate de que `showsData` es un array
    };

    getUsers();
    getPopularTVShows();
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.nombre_usuario}</li>
        ))}
      </ul>

      <h1>Popular TV Shows</h1>
      <div>
        {shows.length > 0 ? (
          shows.map(show => (
            <div key={show.id}>
              <h3>{show.title}</h3>
              <img src={show.poster_path} alt={show.title} style={{ width: '200px' }} />
            </div>
          ))
        ) : (
          <p>No TV shows available.</p>
        )}
      </div>
    </div>
  );
}

export default App;
