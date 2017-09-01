import React, { Component } from 'react';
import './App.css';

// import { key } from './key';
import Inputs from './Inputs';
import Current from './Current';
import Forecast from './Forecast';
import { currentWeather } from './scrubber';
import { conditions } from './conditionsObj';

class App extends Component {

  componentDidMount () {
    // fetch(`https://api.darksky.net/forecast/${key}/40.016457,-105.285884`, {
    // })
    // .then(response => console.log(response.json()));
  }

  render() {
    let currentDescription = currentWeather().icon;
    let picURL = conditions[currentDescription].backgroundURL;
    let divStyle = { background: `url(${picURL})` };

    return (
      <section className="App-container" style={divStyle} >
        <Inputs />
        <Current />
        <Forecast />
      </section>
    );
  }
}

export default App;
