import React from 'react';
import Espacio from './Espacio';
import { useSelector } from 'react-redux';

const PlanoParqueo = () => {
  const espacios = useSelector(state => state.espacios.espacios);
  const zonaSeleccionada = useSelector(state => state.zonas.zonaSeleccionada);

  return (
    <div className="plano-parqueo">
      {espacios
        .filter(espacio => espacio.zona === zonaSeleccionada)
        .map(espacio => (
          <Espacio key={espacio.id} espacio={espacio} />
        ))}
    </div>
  );
};

export default PlanoParqueo;