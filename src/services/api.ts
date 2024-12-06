import axios from 'axios';

import { UserType } from '@/types/types';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchData = async () => {
  const cachedData = localStorage.getItem('userData');
  if (cachedData) {
    return JSON.parse(cachedData);
  }

  try {
    const response = await api.get('/users/1');
    localStorage.setItem('userData', JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.error('Error while receiving data:', error);
    return null;
  }
};

export const updateData = async (data: UserType) => {
  try {
    const response = await api.put(`/users/${data.id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error updating data:', error);
    return null;
  }
};
