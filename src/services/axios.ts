//@ts-ignore
import {WEATHER_API_KEY} from '@env'
import axios from 'axios';

console.log(WEATHER_API_KEY)
export const apiClient = axios.create({
  headers: {
    'Content-Type': 'application/json',
    key: WEATHER_API_KEY,
  },
});
