import { stubbedData } from './stubbed';

export const currentWeather = () => {

  return {
    currentTime: stubbedData.currently.time,
    summary: stubbedData.currently.summary,
    currentTemp: 80
  }
}

export const minutelyData = () => {
  console.log(stubbedData.minutely);

  return {
    forecastType: 'Minutely'
  }
}

export const hourlyData = () => {
  console.log(stubbedData.hourly);

  return {
    forecastType: 'Hourly'
  }
}

export const dailyData = () => {

}
