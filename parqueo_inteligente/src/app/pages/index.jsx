import React from 'react';
import PlanoParqueo from '../components/PlanoParqueo';
import ResumenReserva from '../components/ResumenReserva';
import SelectorZona from '../components/SelectorZona';

const Home = () => {
  return (
    <div className="container">
      <h1>Parqueo Inteligente</h1>
      <SelectorZona />
      <PlanoParqueo />
      <ResumenReserva />
    </div>
  );
};

export default Home;