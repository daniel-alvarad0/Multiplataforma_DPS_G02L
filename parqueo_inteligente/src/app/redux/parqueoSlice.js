import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  zonas: {
    Cubierto: Array(10).fill(false),
    Descubierto: Array(10).fill(false),
    VIP: Array(5).fill(false),
  },
  reserva: { zona: '', espacio: null },
};

const parqueoSlice = createSlice({
  name: 'parqueo',
  initialState,
  reducers: {
    reservarEspacio: (state, action) => {
      const { zona, index } = action.payload;
      if (!state.zonas[zona][index]) {
        state.zonas[zona][index] = true;
        state.reserva = { zona, espacio: index };
      }
    },
  },
});

export const { reservarEspacio } = parqueoSlice.actions;
export default parqueoSlice.reducer;
