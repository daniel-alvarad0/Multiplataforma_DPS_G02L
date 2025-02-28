import { createStore, combineReducers } from 'redux';
import espaciosReducer from './reducers/espaciosReducer';
import zonasReducer from './reducers/zonasReducer';

const rootReducer = combineReducers({
  espacios: espaciosReducer,
  zonas: zonasReducer,
});

const store = createStore(rootReducer);

export default store;