import React from 'react';
import Espacio from './Espacio';

function PlanoParqueo({ espacios, reservarEspacio }) {
  return (
    <div className="row justify-content-center my-5">
      {espacios.map(
        (
          espacio
        ) => (
          <Espacio
            key={espacio.id}
            id={espacio.id}
            disponible={espacio.disponible}
            reservarEspacio={reservarEspacio}
          />
        )
      )}
    </div>
  );
}

export default PlanoParqueo;