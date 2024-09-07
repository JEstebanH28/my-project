"use client" // Indica que este componente es para la parte del cliente en Next.js

import { useState, useEffect } from 'react'; // Importa hooks de React
import axios from 'axios'; // Importa Axios para hacer peticiones HTTP

// Componente funcional Usuarios
const Usuarios = () => {
  // Estado local para almacenar la lista de usuarios
  const [usuarios, setUsuarios] = useState([]);
  // Estado local para almacenar el filtro de búsqueda
  const [filtro, setFiltro] = useState('');
  
  // useEffect para obtener los datos de los usuarios al montar el componente
  useEffect(() => {
    // Realiza una petición GET a la API de JSONPlaceholder para obtener la lista de usuarios
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // Actualiza el estado con los datos de la respuesta
        setUsuarios(response.data);
      })
      .catch(error => console.log(error)); // Manejo de errores en la consola
  }, []); // Dependencia vacía indica que el efecto se ejecuta solo al montar el componente
  
  // Manejador del input de filtro de búsqueda
  const handleFiltro = (event) => {
    // Actualiza el estado del filtro con el valor ingresado en minúsculas
    setFiltro(event.target.value.toLowerCase());
  };
  
  // Filtra los usuarios según el filtro de búsqueda
  const usuariosFiltrados = usuarios.filter(user =>
    user.name.toLowerCase().includes(filtro) || // Filtra por nombre
    user.email.toLowerCase().includes(filtro) || // Filtra por email
    user.address.city.toLowerCase().includes(filtro) // Filtra por ciudad
  );

  // Renderiza el componente
  return (
    <div>
      <h1>Lista de Usuarios</h1>
      {/* Campo de búsqueda para filtrar los usuarios */}
      <input 
        type="text" 
        placeholder="Buscar por nombre, email o ciudad"
        value={filtro} // El valor del input está enlazado con el estado 'filtro'
        onChange={handleFiltro} // Cada vez que cambia el input, actualiza el estado del filtro
      />
      {/* Tabla que muestra los usuarios filtrados */}
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Ciudad</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapea la lista de usuarios filtrados para mostrarlos en la tabla */}
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

export default Usuarios; // Exporta el componente para su uso en otras partes de la aplicación
