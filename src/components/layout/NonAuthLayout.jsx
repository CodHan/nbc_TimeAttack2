import React from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import Navigation from '../Navigation';

const NonAuthLayout = () => {
  const token = window.localStorage.getItem('accessToken');

  return (
    <div>
      <h1>Non Auth Layout</h1>
      <p>로그인이 반드시 안되어있어야 하는 페이지</p>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default NonAuthLayout;
