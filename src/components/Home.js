import React, {PropTypes, Component} from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCode: null
    }
  }

  zipCode(e){
    this.setState({
      zipCode: e.target.value
    })
  }

  getWeather(){
    const url = `http://api.wunderground.com/api/2f60a98d14f97d2d/geolookup/forecast/hourly/forecast10day/conditions/q/${this.state.zipCode}.json`
    fetch(url)
    .then((response)=> {
      return response.json()
    })
    .then((data) => {
      this.props.weather(data)
    })
  }

  render() { 
    return (
      <div>
        <input id="weather-input" type="text" placeholder="Search by zip code" onChange={(e)=>this.zipCode(e)} />
        <button onClick={()=>this.getWeather()}>Get Weather</button>
      </div>
    );
  }
}
