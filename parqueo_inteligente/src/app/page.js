"use client";
import React, { useState } from "react";
import PlanoParqueo from "./components/PlanoParqueo";
import ResumenReserva from "./components/ResumenReserva";
import SelectorZona from "./components/SelectorZona";

function App() {
  const [zona, setZona] = useState("Zona A");
  const [reserva, setReserva] = useState(null);
  const [vehiculo, setVehiculo] = useState("Automóvil");
  const [mensaje, setMensaje] = useState("");

  // Declaración de los espacios de estacionamiento
  const [espaciosPorZona, setEspaciosPorZona] = useState({
    "Zona A": [
      { id: 1, disponible: true, tipo: "Automóvil" },
      { id: 2, disponible: false, tipo: "Motocicleta" },
      { id: 3, disponible: true, tipo: "Automóvil" },
    ],
    "Zona B": [
      { id: 4, disponible: true, tipo: "Automóvil" },
      { id: 5, disponible: true, tipo: "Motocicleta" },
      { id: 6, disponible: false, tipo: "Automóvil" },
    ],
    "Zona C": [
      { id: 7, disponible: true, tipo: "Camioneta" },
      { id: 8, disponible: false, tipo: "Automóvil" },
    ],
  });

  const reservarEspacio = (espacioId) => {
    const espacio = espaciosPorZona[zona].find((e) => e.id === espacioId);
    if (!espacio.disponible) {
      setMensaje("Error: Ese espacio ya está ocupado.");
      setTimeout(() => setMensaje(""), 3000);
      return;
    }
    if (vehiculo !== espacio.tipo) {
      setMensaje(
        `No puedes reservar el espacio ${espacioId} porque es para ${espacio.tipo}.`
      );
      setTimeout(() => setMensaje(""), 3000);
      return;
    }
    setReserva({ espacio: espacioId, zona, hora: "7:00 AM", vehiculo });
    setMensaje(`¡Espacio ${espacioId} reservado con éxito para tu ${vehiculo}!`);
    setTimeout(() => setMensaje(""), 3000);

    setEspaciosPorZona((prevEspaciosPorZona) => ({
      ...prevEspaciosPorZona,
      [zona]: prevEspaciosPorZona[zona].map((e) =>
        e.id === espacioId ? { ...e, disponible: false } : e
      ),
    }));
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-dark text-white">
      <header className="text-center py-4">
        <h1>Reserva de Estacionamiento</h1>
      </header>
      <main className="flex-grow-1 d-flex flex-column justify-content-center align-items-center p-4">
        <div className="w-100" style={{ maxWidth: "900px" }}>
          <SelectorZona zona={zona} setZona={setZona} />
          <div className="d-flex justify-content-center align-items-center my-4">
            <label htmlFor="vehiculo" className="me-3">
              Tipo de Vehículo:
            </label>
            <select
              id="vehiculo"
              value={vehiculo}
              onChange={(e) => setVehiculo(e.target.value)}
              className="form-control w-auto bg-secondary text-dark border-0 shadow-sm transition-all"
            >
              <option value="Automóvil">Automóvil</option>
              <option value="Motocicleta">Motocicleta</option>
              <option value="Camioneta">Camioneta</option>
            </select>
          </div>
          {mensaje && (
            <div
              className={`alert ${
                mensaje.includes("Error") ? "alert-danger" : "alert-success"
              } w-75 mx-auto text-center animate__animated animate__fadeIn`}
            >
              {mensaje}
            </div>
          )}
          <PlanoParqueo
            espacios={espaciosPorZona[zona]}
            reservarEspacio={reservarEspacio}
          />
          <ResumenReserva reserva={reserva} />
        </div>
      </main>
    </div>
  );
}

export default App;