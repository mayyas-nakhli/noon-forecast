import axios from 'axios';
import { backendURL } from '../data/index';

export const apiClient = axios.create({
  baseURL: backendURL,
  headers: {
    'Content-Type': 'application/json',
    key: process.env.WEATHER_API_KEY,
  },
});
