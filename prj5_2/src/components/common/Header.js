import React from "react";
import { Link } from "react-router-dom";
import "../common/common.css"; // 올바른 경로

export default function Header() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow">
        <div className="container">
          {/* 왼쪽 학번 및 이름 */}
          <div className="navbar-brand">
            <Link className="navbar-text text-white text-decoration-none" to="/">
              Students Info
            </Link>
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
