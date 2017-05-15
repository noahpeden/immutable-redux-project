import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import Weather from '../components/Weather';
import { zipWeather } from '../actions';


function mapStateToProps(state, props) {
  return {
      cityWeather: state.weatherReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
