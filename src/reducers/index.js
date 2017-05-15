import {combineReducers} from 'redux';
import weatherReducer from './home-reducer'

const rootReducer = combineReducers({
  weatherReducer
});

export default rootReducer;
