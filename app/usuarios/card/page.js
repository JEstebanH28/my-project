"use client" // Indica que este componente es para la parte del cliente en Next.js

import { useState, useEffect } from 'react'; // Importa hooks de React
import axios from 'axios'; // Importa Axios para hacer peticiones HTTP

// Componente funcional UsuariosGrid
const UsuariosGrid = () => {
  // Estado local para almacenar los usuarios obtenidos de la API
  const [usuarios, setUsuarios] = useState([]);

  // useEffect para realizar la petición a la API cuando el componente se monta
  useEffect(() => {
    // Petición GET a la API de JSONPlaceholder para obtener una lista de usuarios
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // Actualiza el estado con los datos obtenidos de la API
        setUsuarios(response.data);
      })
      .catch(error => console.log(error)); // Manejo de errores en la consola
  }, []); // Dependencia vacía indica que el efecto se ejecuta solo una vez, al montar el componente

  // Renderiza el componente
  return (
    <div>
      <h1>Usuarios en Formato Grid</h1>
      {/* Contenedor de los usuarios con display flex para mostrar en formato grid */}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {/* Mapea el array de usuarios para renderizar cada uno en un div */}
        {usuarios.map(user => (
          <div key={user.id} style={{ border: '1px solid black', margin: '10px', padding: '10px', width: '200px' }}>
            {/* Muestra el nombre del usuario */}
            <h3>{user.name}</h3>
            {/* Muestra el email del usuario */}
            <p>Email: {user.email}</p>
            {/* Muestra la ciudad del usuario */}
            <p>Ciudad: {user.address.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsuariosGrid; // Exporta el componente para su uso en otras partes de la aplicación
