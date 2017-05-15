import React, {PropTypes, Component} from 'react';

const Weather = (props) => {
    const cities = props.cityWeather.map((city)=>{
      return (
        <div className='city-card' key={city.id}>
          <ul>
            City: {city.city}
            <li>Temperature: {city.temp}</li>
            <li>Currently: {city.currently}</li>
          </ul>
        </div>
      )
    })
    return (
        <div>
            {cities}
        </div>
    )
}

export default Weather;