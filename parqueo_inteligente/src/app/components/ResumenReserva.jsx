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
    <div className="my-5 w-75 mx-auto text-center">
      <h2 className="mb-3">Resumen de tu reserva</h2>
      {contenido}
    </div>
  );
}

export default ResumenReserva;