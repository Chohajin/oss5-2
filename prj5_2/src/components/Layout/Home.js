import React from "react";
import Carousel from "../Pages/Carousel"; // 올바른 경로
import "./Home.css"; // 스타일을 위한 CSS 파일

const Home = () => {
  return (
    <div className="home-container">
      <div>
        <Carousel />
      </div>
      <a
        href="https://github.com/Chohajin"
        target="_blank"
        rel="noopener noreferrer"
        className="centered-link"
      >
        Hajin Cho's Github (click here)
      </a>
    </div>
  );
};

export default Home;
