import { useDispatch } from 'react-redux';
import { reservarEspacio } from '../redux/parqueoSlice';

const Espacio = ({ zona, index, ocupado }) => {
  const dispatch = useDispatch();

  return (
    <button
      className={`m-2 btn ${ocupado ? 'btn-danger' : 'btn-success'}`}
      onClick={() => dispatch(reservarEspacio({ zona, index }))}
      disabled={ocupado}
    >
      {index + 1}
    </button>
  );
};

export default Espacio;