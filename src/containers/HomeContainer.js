import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import Home from '../components/Home';
import { zipWeather } from '../actions';


function mapStateToProps(state, props) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    weather: (data) => {
      dispatch(zipWeather(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
