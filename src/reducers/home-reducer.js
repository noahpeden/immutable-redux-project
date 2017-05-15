import * as types from '../actions/action-types';

const weatherReducer = (state = [], action) => {
  switch(action.type){
    case 'WEATHER':
    return [...state, {
      city:action.city,
      temp:action.temp,
      currently:action.currently
    }]
    default:
    return state
   }
};

export default weatherReducer


const weatherReducer = (state = [], action){
  switch(action.type) {
    case 'WEATHER'
  }
}
