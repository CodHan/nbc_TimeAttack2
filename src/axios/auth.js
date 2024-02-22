import axios from 'axios';

export const authApi = axios.create({
  baseURL: 'https://moneyfulpublicpolicy.co.kr',
});

authApi.interceptors.request.use(
  function (config) {
    console.log('인터셉트 요청 성공 !');
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
authApi.interceptors.response.use(
  function (response) {
    console.log('응답 받았습니다 !');
    return response;
  },
  function (error) {
    console.log('응답받지 못했어요..');
    return Promise.reject(error);
  }
);

authApi.interceptors.request.use();
