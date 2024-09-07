import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Inicio</h1>
      <h2>Datos Usuarios</h2>
      <nav>
        <ul>
          {/* Enlace a la página de visualización y consulta de usuarios en tabla */}
          <li>
            <Link href="/usuarios/table">Ver y consultar usuarios en tabla</Link>
          </li>
          
          {/* Enlace a la página de visualización de usuarios en formato card */}
          <li>
            <Link href="/usuarios/card">Ver usuarios en formato card</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
