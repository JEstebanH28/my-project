"use client" 

import { useState, useEffect } from 'react';
import axios from 'axios';

const UsuariosGrid = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsuarios(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Usuarios en Formato Grid</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {usuarios.map(user => (
          <div key={user.id} style={{ border: '1px solid black', margin: '10px', padding: '10px', width: '200px' }}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Ciudad: {user.address.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsuariosGrid;
