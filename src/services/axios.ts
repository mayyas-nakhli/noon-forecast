import axios from 'axios';

export const apiClient = axios.create({
  headers: {
    'Content-Type': 'application/json',
    key: "0f33b7e8c2da4cbcb9491919232006",
  },
});
