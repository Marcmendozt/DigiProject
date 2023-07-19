import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <header className="menu">
        <nav>
          <ul>
          <li>
          <Link to="/Recibos">Crear recibo</Link>
        </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Home;
