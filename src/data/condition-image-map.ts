const clear_night = require('../../assets/weather-icons/clear-night.png');
const clear_day = require('../../assets/weather-icons/clear-day.png');
const partly_cloudy_night = require('../../assets/weather-icons/partly-cloudy-night.png');
const partly_cloudy_day = require('../../assets/weather-icons/partly-cloudy-day.png');
const cloudy = require('../../assets/weather-icons/cloudy.png');
const rain = require('../../assets/weather-icons/rain.png');
const sleet = require('../../assets/weather-icons/sleet.png');
const snow = require('../../assets/weather-icons/snow.png');
export const CONDITION_IMAGE: {
  [key: string]: any;
}[] = [
  {
    Clear: clear_night,
    'Partly cloudy': partly_cloudy_night,
    Cloudy: cloudy,
    'Light Rain': rain,
    'Moderate rain at times': rain,
    'Moderate rain': rain,
    'Heavy rain at times': rain,
    'Heavy rain': rain,
    'Light freezing rain': rain,
    'Moderate or heavy freezing rain': rain,
    'Light sleet': sleet,
    'Moderate or heavy sleet': sleet,
    'Patchy light snow': snow,
    'Light snow': snow,
    'Patchy moderate snow': snow,
    'Moderate snow': snow,
    'Patchy heavy snow': snow,
    'Heavy snow': snow,
  },
  {
    Sunny: clear_day,
    'Partly cloudy': partly_cloudy_day,
    Cloudy: cloudy,
    'Light Rain': rain,
    'Moderate rain at times': rain,
    'Moderate rain': rain,
    'Heavy rain at times': rain,
    'Heavy rain': rain,
    'Light freezing rain': rain,
    'Moderate or heavy freezing rain': rain,
    'Light sleet': sleet,
    'Moderate or heavy sleet': sleet,
    'Patchy light snow': snow,
    'Light snow': snow,
    'Patchy moderate snow': snow,
    'Moderate snow': snow,
    'Patchy heavy snow': snow,
    'Heavy snow': snow,
  },
];
