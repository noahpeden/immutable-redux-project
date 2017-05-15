import * as types from './action-types';

export const zipWeather = (data) => {
  debugger;
  return {
    type: types.WEATHER,
    city: data.location.city,
  };
}
