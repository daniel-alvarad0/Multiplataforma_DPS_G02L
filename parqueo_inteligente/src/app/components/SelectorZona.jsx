import React from "react";

function SelectorZona({ zona, setZona }) {
  const zonas = ["Zona A", "Zona B", "Zona C"];

  return (
    <div className="my-5 text-center">
      <h4 className="mb-3">Elige una zona</h4>
      <div className="btn-group">
        {zonas.map((z) => {
          let buttonClass = "btn btn-lg transition-all ";
          if (zona === z) {
            buttonClass += "btn-outline-light shadow";
          } else {
            buttonClass += "btn-dark hover-scale";
          }

          return (
            <button
              key={z}
              className={buttonClass}
              onClick={() => setZona(z)}
            >
              {z}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SelectorZona;
