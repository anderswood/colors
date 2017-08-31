import React, { Component } from 'react';
import './App.css';

import {key} from './key';
import Inputs from './Inputs';
import Forecast from './Forecast';

class App extends Component {

  componentDidMount () {
    // fetch(`https://api.darksky.net/forecast/${key}/40.016457,-105.285884`, {
    // })
    // .then(response => console.log(response.json()));
  }

  render() {
    return (
      <div className="App">
        <Inputs />
        <section className='current-container'>Howdy! It's ${} and your local weather is ${}</section>
        <Forecast />
      </div>
    );
  }
}

export default App;
