import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const SelectorZona = () => {
  const dispatch = useDispatch();
  const zonas = useSelector(state => state.zonas.zonas);
  const zonaSeleccionada = useSelector(state => state.zonas.zonaSeleccionada);

  const seleccionarZona = (zona) => {
    dispatch({ type: 'SELECCIONAR_ZONA', payload: zona });
  };

  return (
    <div className="selector-zona">
      {zonas.map(zona => (
        <button
          key={zona}
          className={`zona ${zona === zonaSeleccionada ? 'seleccionada' : ''}`}
          onClick={() => seleccionarZona(zona)}
        >
          {zona}
        </button>
      ))}
    </div>
  );
};

export default SelectorZona;