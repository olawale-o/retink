import axios from 'axios';
const baseURL = 'http://localhost:3000/api/v1 ';
const api = axios.create({
  baseURL,
});

export const axiosPrivate = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
});

export const post = async (url, data) =>  {
  const response = await api.post(url, data);
  return response.data;
};

export default api;
