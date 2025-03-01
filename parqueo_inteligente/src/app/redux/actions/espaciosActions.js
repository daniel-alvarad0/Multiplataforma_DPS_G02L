import { RESERVAR_ESPACIO } from '../../types';

export const reservarEspacio = (id) => {
  return {
    type: RESERVAR_ESPACIO,
    payload: { id },
  };
};