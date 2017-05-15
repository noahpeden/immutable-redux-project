import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomeContainer from './containers/HomeContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeContainer />
      </div>
    );
  }
}

export default App;
