const initialState = {
    zonas: ['Cubierto', 'Descubierto', 'VIP'],
    zonaSeleccionada: 'Cubierto',
  };
  
  const zonasReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SELECCIONAR_ZONA':
        return {
          ...state,
          zonaSeleccionada: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default zonasReducer;