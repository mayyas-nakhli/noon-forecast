//@ts-ignore
import { WEATHER_API_KEY } from '@env';
import axios from 'axios';
import { backendURL } from '../data';

export const apiClient = axios.create({
  baseURL: backendURL,
  headers: {
    'Content-Type': 'application/json',
    key: WEATHER_API_KEY,
  },
});
