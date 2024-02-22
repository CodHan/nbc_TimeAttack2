import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  const token = window.localStorage.getItem('accessToken');

  return (
    <nav>
      {/* 로그인 또는 로그아웃 버튼 */}
      <button
        onClick={() => {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('nickname');
          localStorage.removeItem('userId');
          navigate('/');
        }}
      >
        로그아웃
      </button>
      <button
        onClick={() => {
          if (token) {
            alert('이미 로그인 상태 입니다.');
            navigate('/');
          } else {
            navigate('/login');
          }
        }}
      >
        로그인하러가기
      </button>

      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
        }}
      >
        <hr />

        {/* 로그인 여부가 상관없는 메뉴 */}
        <p>❗️ 로그인 여부가 상관없는 메뉴</p>
        <li>
          <Link to={'/'}>홈 메뉴로</Link>
        </li>
        <li>
          <Link to={'/search'}>검색페이지로</Link>
        </li>
        <li>
          <Link to={'/testPage'}>권한테스트 페이지로</Link>
        </li>

        <hr />

        {/* 로그인이 반드시 필요한 메뉴 */}
        <p>❗️ 로그인이 반드시 필요한 메뉴</p>
        <li>
          <Link to={'/user/1'}>1번 유저의 정보</Link>
        </li>
        <li>
          <Link to={'/user/2'}>2번 유저의 정보</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
