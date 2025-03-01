import { SELECCIONAR_ZONA } from '../../types';

export const seleccionarZona = (zona) => {
  return {
    type: SELECCIONAR_ZONA,
    payload: zona,
  };
};