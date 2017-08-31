import React from 'react';

import { minutelyData } from './scrubber';
// import { hourlyData } from './scrubber';

const Forecast = () => {

  minutelyData()
  // hourlyData()

  return (
    <section className='forecast-container'>Forecasts
      <div className='forecast-minutely'></div>
    </section>
  )
}

export default Forecast;
