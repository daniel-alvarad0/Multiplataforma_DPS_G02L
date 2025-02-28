import { useState } from 'react';
import PlanoParqueo from './PlanoParqueo';

const SelectorZona = () => {
  const [zona, setZona] = useState('Cubierto');

  return (
    <div>
      <select className="form-select my-3" onChange={(e) => setZona(e.target.value)}>
        <option value="Cubierto">Cubierto</option>
        <option value="Descubierto">Descubierto</option>
        <option value="VIP">VIP</option>
      </select>
      <PlanoParqueo zona={zona} />
    </div>
  );
};

export default SelectorZona;
