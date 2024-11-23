import React from 'react';
import Carasol from '../Pages/Carosol';
import './Home.css'; // 스타일을 위한 CSS 파일

const Home = () => {
  return (
    <div className="home-container">
      <div>
        <Carasol />
      </div>

      <a href="https://github.com/Chohajin" target="_blank" className="centered-link">
         Hajin Cho's Github (click here)
      </a>
    </div>
  );
};

export default Home;