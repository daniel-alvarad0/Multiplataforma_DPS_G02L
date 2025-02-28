import React from 'react';
import { useSelector } from 'react-redux';

const ResumenReserva = () => {
  const espacios = useSelector(state => state.espacios.espacios);
  const espacioReservado = espacios.find(espacio => espacio.ocupado);

  return (
    <div className="resumen-reserva">
      {espacioReservado ? (
        <div>
          <h3>Resumen de Reserva</h3>
          <p>Espacio: {espacioReservado.id}</p>
          <p>Zona: {espacioReservado.zona}</p>
        </div>
      ) : (
        <p>No hay reservas activas.</p>
      )}
    </div>
  );
};

export default ResumenReserva;