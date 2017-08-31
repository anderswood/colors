import React, { Component } from 'react';
import './App.css';
import moment from 'moment';

// import { key } from './key';
import Inputs from './Inputs';
import Forecast from './Forecast';
import { stubbedData } from './stubbed';

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
        <section className='current-container'>Howdy! It's {moment.unix(stubbedData.currently.time).format('h:mm a')} on {moment.unix(stubbedData.currently.time).format('MMMM Do')} and your local weather is {stubbedData.currently.summary}</section>
        <Forecast />
      </div>
    );
  }
}

export default App;
