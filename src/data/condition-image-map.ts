const clear_day = require('../../assets/weather-icons/clear-day.png');
const clear_night = require('../../assets/weather-icons/clear-night.png');
const cloudy = require('../../assets/weather-icons/cloudy.png');
const drizzle = require('../../assets/weather-icons/drizzle.png');
const fog = require('../../assets/weather-icons/fog.png');
const mist = require('../../assets/weather-icons/mist.png');
const overcast_day = require('../../assets/weather-icons/overcast-day.png');
const overcast_night = require('../../assets/weather-icons/overcast-night.png');
const partly_cloudy_day = require('../../assets/weather-icons/partly-cloudy-day.png');
const partly_cloudy_night = require('../../assets/weather-icons/partly-cloudy-night.png');
const rain = require('../../assets/weather-icons/rain.png');
const sleet = require('../../assets/weather-icons/sleet.png');
const snow = require('../../assets/weather-icons/snow.png');
const thunder_day = require('../../assets/weather-icons/thunderstorms-day.png');
const thunder_night = require('../../assets/weather-icons/thunderstorms-night.png');
const thunder_rain_day = require('../../assets/weather-icons/thunderstorms-day-rain.png');
const thunder_rain_night = require('../../assets/weather-icons/thunderstorms-night-rain.png');
const thunder_snow_day = require('../../assets/weather-icons/thunderstorms-day-snow.png');
const thunder_snow_night = require('../../assets/weather-icons/thunderstorms-night-snow.png');

export const CONDITION_IMAGE: {
  [key: string]: any;
}[] = [
  {
    'Blowing snow': snow,
    'Freezing fog': fog,
    'Heavy rain at times': rain,
    'Heavy rain': rain,
    'Heavy snow': snow,
    'Light Rain': rain,
    'Light drizzle': drizzle,
    'Light freezing rain': rain,
    'Light rain shower': rain,
    'Light rain': rain,
    'Light sleet': sleet,
    'Light snow': snow,
    'Moderate or heavy freezing rain': rain,
    'Moderate or heavy rain shower': rain,
    'Moderate or heavy rain with thunder': thunder_rain_night,
    'Moderate or heavy sleet': sleet,
    'Moderate or heavy snow with thunder': thunder_snow_night,
    'Moderate rain at times': rain,
    'Moderate rain': rain,
    'Moderate snow': snow,
    'Partly cloudy': partly_cloudy_night,
    'Patchy heavy snow': snow,
    'Patchy light rain': rain,
    'Patchy light drizzle': drizzle,
    'Patchy light rain with thunder': thunder_rain_night,
    'Patchy light snow with thunder': thunder_snow_night,
    'Patchy light snow': snow,
    'Patchy moderate snow': snow,
    'Patchy rain possible': rain,
    'Thundery outbreaks possible': thunder_night,
    Clear: clear_night,
    Cloudy: cloudy,
    Fog: fog,
    Mist: mist,
    Overcast: overcast_night,
  },
  {
    'Blowing snow': snow,
    'Freezing fog': fog,
    'Heavy rain at times': rain,
    'Heavy rain': rain,
    'Heavy snow': snow,
    'Light Rain': rain,
    'Light drizzle': drizzle,
    'Light freezing rain': rain,
    'Light rain shower': rain,
    'Light rain': rain,
    'Light sleet': sleet,
    'Light snow': snow,
    'Moderate or heavy freezing rain': rain,
    'Moderate or heavy rain shower': rain,
    'Moderate or heavy rain with thunder': thunder_rain_day,
    'Moderate or heavy sleet': sleet,
    'Moderate or heavy snow with thunder': thunder_snow_day,
    'Moderate rain at times': rain,
    'Moderate rain': rain,
    'Moderate snow': snow,
    'Partly cloudy': partly_cloudy_day,
    'Patchy heavy snow': snow,
    'Patchy light drizzle': drizzle,
    'Patchy light rain': rain,
    'Patchy light rain with thunder': thunder_rain_day,
    'Patchy light snow with thunder': thunder_snow_day,
    'Patchy light snow': snow,
    'Patchy moderate snow': snow,
    'Patchy rain possible': rain,
    'Thundery outbreaks possible': thunder_day,
    Cloudy: cloudy,
    Fog: fog,
    Mist: mist,
    Overcast: overcast_day,
    Sunny: clear_day,
  },
];
