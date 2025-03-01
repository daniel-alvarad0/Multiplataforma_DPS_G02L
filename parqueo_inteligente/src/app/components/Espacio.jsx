import React from "react";

function Espacio({ id, disponible, reservarEspacio }) {
  let buttonClass = "btn w-100 p-4 transition-all ";
  if (disponible) {
    buttonClass += "btn-secondary shadow hover-scale"; 
  } else {
    buttonClass += "btn-dark text-muted opacity-75";
  }

  return (
    <div className="col-6 col-md-3 m-3 text-center">
      <button
        className={buttonClass}
        onClick={() => reservarEspacio(id)}
        disabled={!disponible} 
      >
        <strong>Espacio {id}</strong> <br />
        {disponible ? "Disponible" : "Ocupado"}
      </button>
    </div>
  );
}

export default Espacio;
