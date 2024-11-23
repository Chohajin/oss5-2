import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./components/Layout/Home";
import CreateUser from "./components/User/CreateUser";
import EditUser from "./components/User/EditUser";
import ShowUser from "./components/User/ShowUser";
import ShowList from "./components/Pages/Carosol";

function App() {
  return (
    <div>
      {/* 공통 Header */}
      <Header />
      <Routes>
        {/* 페이지 경로 설정 */}
        <Route path="/" element={<Home />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} /> {/* id 매개변수 추가 */}
        <Route path="/show-user" element={<ShowUser />} />
        <Route path="/show-list" element={<ShowList />} />
      </Routes>
      {/* 공통 Footer */}
      <Footer />
    </div>
  );
}

export default App;