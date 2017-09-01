import React from 'react';

import { currentWeather, minutelyData } from './scrubber';
import { conditions } from './conditionsObj';

const Forecast = () => {
  minutelyData()
  // hourlyData()

  let currentDescription = currentWeather().icon;
  let rGBValues = conditions[currentDescription].color;
  let divStyle = { background: `rgb(${rGBValues})` };
console.log(currentDescription);
  return (
    <section className='forecast-container'>Forecasts
      <div className='forecast-minutely' style={divStyle}></div>
    </section>
  )
}

export default Forecast;
