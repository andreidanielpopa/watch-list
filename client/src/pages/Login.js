import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../services/api';

function Login () {
    const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const usersData = await fetchUsers();
      setUsers(usersData);
    };

    getUsers();
  }, []);
  return(
        <div>
            <h1>Login Page</h1>
            <h2>Users List</h2>
            <ul>
                {users.map(user => (
                <li key={user.id}>{user.nombre_usuario}</li>
                ))}
            </ul>
        </div>
            
    );
};

export default Login;