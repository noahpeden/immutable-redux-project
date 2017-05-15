import rootReducer from '../reducers';
import {createStore} from 'redux';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default (initialState) => {
  return createStore(rootReducer, initialState, devTools);
};
