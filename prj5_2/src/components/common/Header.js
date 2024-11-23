import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

export default function Header() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow">
        <div className="container">
          {/* 왼쪽 학번 및 이름 */}
          <div className="navbar-brand">
            <span className="navbar-text">Students Info</span>
          </div>
          
          {/* 오른쪽 네비게이션 메뉴 */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarMenu"
          >
            <ul className="navbar-nav">
              <span className="nav-item">
                <Link className="nav-link text-uppercase" to="/">
                  Home
                </Link>
              </span>
              <span className="nav-item">
                <Link className="nav-link text-uppercase" to="/create-user">
                  Sign In
                </Link>
              </span>
              <span className="nav-item">
                <Link className="nav-link text-uppercase" to="/show-user">
                  Show User
                </Link>
              </span>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
