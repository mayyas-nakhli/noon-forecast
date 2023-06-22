const clear_night = require('../../assets/weather-icons/clear-night.png');
const clear_day = require('../../assets/weather-icons/clear-day.png');
const partly_cloudy_night = require('../../assets/weather-icons/partly-cloudy-night.png');
const partly_cloudy_day = require('../../assets/weather-icons/partly-cloudy-day.png');
const cloudy = require('../../assets/weather-icons/cloudy.png');
const rain = require('../../assets/weather-icons/rain.png');
const sleet = require('../../assets/weather-icons/sleet.png');
const snow = require('../../assets/weather-icons/snow.png');
const thunder_rain_night = require('../../assets/weather-icons/thunderstorms-night-rain.png');
const thunder_rain_day = require('../../assets/weather-icons/thunderstorms-day-rain.png');
const thunder_snow_night = require('../../assets/weather-icons/thunderstorms-night-snow.png');
const thunder_snow_day= require('../../assets/weather-icons/thunderstorms-day-snow.png');
const thunder_night = require('../../assets/weather-icons/thunderstorms-night.png')
const thunder_day = require('../../assets/weather-icons/thunderstorms-day.png');
const overcast_night = require('../../assets/weather-icons/overcast-night.png');
const overcast_day= require('../../assets/weather-icons/overcast-day.png');

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
    'Patchy rain possible': rain,
    'Light sleet': sleet,
    'Moderate or heavy sleet': sleet,
    'Patchy light snow': snow,
    'Light snow': snow,
    'Patchy moderate snow': snow,
    'Moderate snow': snow,
    'Patchy heavy snow': snow,
    'Heavy snow': snow,
    'Patchy light rain with thunder': thunder_rain_night,
    'Moderate or heavy rain with thunder': thunder_rain_night,
    'Patchy light snow with thunder': thunder_snow_night,
    'Moderate or heavy snow with thunder': thunder_snow_night,
    "Thundery outbreaks possible": thunder_night,
    "Blowing snow": snow,
    "Overcast": overcast_night,
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
    'Patchy rain possible': rain,
    'Moderate or heavy freezing rain': rain,
    'Light sleet': sleet,
    'Moderate or heavy sleet': sleet,
    'Patchy light snow': snow,
    'Light snow': snow,
    'Patchy moderate snow': snow,
    'Moderate snow': snow,
    'Patchy heavy snow': snow,
    'Heavy snow': snow,
    'Patchy light rain with thunder': thunder_rain_day,
    'Moderate or heavy rain with thunder': thunder_rain_day,
    'Patchy light snow with thunder': thunder_snow_day,
    'Moderate or heavy snow with thunder': thunder_snow_day,
    "Thundery outbreaks possible": thunder_day,
    "Blowing snow": snow,
    "Overcast": overcast_day,
  },
];
