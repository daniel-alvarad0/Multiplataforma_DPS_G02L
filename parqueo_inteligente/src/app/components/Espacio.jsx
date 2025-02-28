import React from 'react';
import { useDispatch } from 'react-redux';

const Espacio = ({ espacio }) => {
  const dispatch = useDispatch();

  const reservarEspacio = () => {
    dispatch({ type: 'RESERVAR_ESPACIO', payload: { id: espacio.id } });
  };

  return (
    <button
      className={`espacio ${espacio.ocupado ? 'ocupado' : 'disponible'}`}
      onClick={reservarEspacio}
      disabled={espacio.ocupado}
    >
      {espacio.id}
    </button>
  );
};

export default Espacio;