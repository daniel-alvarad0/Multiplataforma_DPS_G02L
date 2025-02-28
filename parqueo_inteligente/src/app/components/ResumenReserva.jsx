import { useSelector } from 'react-redux';

const ResumenReserva = () => {
  const reserva = useSelector((state) => state.parqueo.reserva);

  return (
    <div className="alert alert-info">
      {reserva.espacio !== null ? (
        <p>Reserva en zona {reserva.zona}, espacio {reserva.espacio + 1}</p>
      ) : (
        <p>No hay reservas activas.</p>
      )}
    </div>
  );
};

export default ResumenReserva;
