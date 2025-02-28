import Espacio from './Espacio';
import { useSelector } from 'react-redux';

const PlanoParqueo = ({ zona }) => {
  const espacios = useSelector((state) => state.parqueo.zonas[zona]);

  return (
    <div className="d-flex flex-wrap">
      {espacios.map((ocupado, index) => (
        <Espacio key={index} zona={zona} index={index} ocupado={ocupado} />
      ))}
    </div>
  );
};

export default PlanoParqueo;
