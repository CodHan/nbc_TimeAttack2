import axios from 'axios';
import { authApi } from './auth';

const token = localStorage.getItem('accessToken');
const commentsAxios = axios.create({
  baseURL: 'http://localhost:3001/comments',
  timeout: 1500,
});

commentsAxios.interceptors.request.use(function (config) {
  authApi.get('/user', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return config;
}),
  function (error) {
    return Promise.reject(error);
  };

commentsAxios.interceptors.response.use();

export default commentsAxios;
