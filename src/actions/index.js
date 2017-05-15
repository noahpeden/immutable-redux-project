import * as types from './action-types';

export const zipWeather = (data) => {
  return {
    type: types.WEATHER,
    city: data.location.city,
    temp: data.current_observation.temp_f,
    currently: data.current_observation.weather
  };
}
