import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/common/Header";
import Footer from "./Components/common/Footer";
import Home from "./Components/Layout/Home";
import CreateUser from "./Components/User/CreateUser";
import EditUser from "./Components/User/EditUser";
import ShowUser from "./Components/User/ShowUser";
import Carousel from "./Components/Pages/Carousel";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
        <Route path="/show-user" element={<ShowUser />} />
        <Route path="/show-list" element={<Carousel />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
