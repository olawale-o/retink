import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/v1/',
});

export const post = async (url, data) =>  {
  const response = await api.post(url, data);
  return response.data;
};

export default api;
