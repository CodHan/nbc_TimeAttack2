import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authApi } from '../../axios/auth';

const LoginPage = () => {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h1>Login</h1>
      <p>Login page</p>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            const login = await authApi.post('/login', {
              id: id,
              password: password,
            });
            alert('로그인에 성공하였습니다. 메인 페이지로 이동할게요');
            localStorage.setItem('accessToken', login.data.accessToken);
            localStorage.setItem('userId', login.data.userId);
            localStorage.setItem('nickname', login.data.nickname);
            navigate('/');
          } catch (error) {
            alert(error.response.data.message);
          }
        }}
      >
        <div>
          <label htmlFor="id">id</label>
          <input
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button type="submit">Login</button>
        <button
          type="button"
          onClick={() => {
            navigate('/signup');
          }}
        >
          회원가입하러가기
        </button>
        <button
          type="button"
          onClick={() => {
            navigate('/');
          }}
        >
          홈으로
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
