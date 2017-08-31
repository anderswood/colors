import React from 'react';
import moment from 'moment';

import { currentWeather } from './scrubber';


const Current = () => {
  return (
    <section className='current-container'>
      <h2>Howdy! It's {moment.unix(currentWeather().currentTime).format('h:mm a')} on {moment.unix(currentWeather().currentTime).format('MMMM Do')} and your local weather is {currentWeather().summary}</h2>
    </section>
  )
}

export default Current;
