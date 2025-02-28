import SelectorZona from '../components/SelectorZona';
import ResumenReserva from '../components/ResumenReserva';

export default function Home() {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Reserva de Estacionamiento</h1>
      <SelectorZona />
      <ResumenReserva />
    </div>
  );
}
