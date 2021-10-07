import { combineReducers } from 'redux';
import meuReducer from './meuReducer';
import meuOutroReducer from './meuOutroReducer';


// recebe um objeto como parâmetro contendo cada um dos seus reducers como elementos
const reducerCombinado = combineReducers({
meuReducer,
meuOutroReducer});

export default reducerCombinado;