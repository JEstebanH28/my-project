"use client" 
import { useState, useEffect } from 'react';
import axios from 'axios';

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [filtro, setFiltro] = useState('');
  
  useEffect(() => {
    // Aquí se obtiene la información de los usuarios
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsuarios(response.data);
      })
      .catch(error => console.log(error));
  }, []);
  
  const handleFiltro = (event) => {
    setFiltro(event.target.value.toLowerCase());
  };
  
  const usuariosFiltrados = usuarios.filter(user =>
    user.name.toLowerCase().includes(filtro) || 
    user.email.toLowerCase().includes(filtro) || 
    user.address.city.toLowerCase().includes(filtro)
  );

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <input 
        type="text" 
        placeholder="Buscar por nombre, email o ciudad"
        value={filtro}
        onChange={handleFiltro}
      />
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Ciudad</th>
          </tr>
        </thead>
        <tbody>
          {usuariosFiltrados.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Usuarios;
