import React, { Component } from 'react';
import './App.css';

// import { key } from './key';
import Inputs from './Inputs';
import Current from './Current';
import Forecast from './Forecast';
// import {conditions} from './conditionsObj';

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
        <Current />
        <Forecast />
      </div>
    );
  }
}

export default App;
