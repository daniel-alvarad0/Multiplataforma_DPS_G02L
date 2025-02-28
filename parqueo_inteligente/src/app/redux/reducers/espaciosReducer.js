const initialState = {
    espacios: [],
  };
  
  const espaciosReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'RESERVAR_ESPACIO':
        return {
          ...state,
          espacios: state.espacios.map(espacio =>
            espacio.id === action.payload.id ? { ...espacio, ocupado: true } : espacio
          ),
        };
      default:
        return state;
    }
  };
  
  export default espaciosReducer;