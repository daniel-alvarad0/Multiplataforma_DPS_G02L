import React from 'react';

function ResumenReserva({ reserva }) {
  let contenido;
  if (reserva) {
    contenido = (
      <div className="card bg-dark text-white p-4 shadow animate__animated animate__fadeIn">
        <p>
          <strong>Espacio:</strong> {`Espacio ${reserva.espacio}`}
        </p>
        <p>
          <strong>Zona:</strong> {`Zona ${reserva.zona}`}
        </p>
      </div> 
    );
  } else {
    contenido = (
      <p className="text-muted">Aún no has reservado ningun espacio de estacionamiento.</p>
    );
  }

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
}

export default ResumenReserva;