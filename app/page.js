import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Página Principal</h1>
      <nav>
        <ul>
          <li><Link href="/usuarios/table">Ver usuarios en tabla</Link></li>
          <li><Link href="/usuarios/card">Ver usuarios en formato card</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
