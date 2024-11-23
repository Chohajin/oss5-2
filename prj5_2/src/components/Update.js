import React, { useState, useRef, useEffect } from "react";

const Update = () => {
  const [user, setUser] = useState({ name: "", age: "", city: "" });
  const [editCount, setEditCount] = useState(0);
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const cityRef = useRef(null);

  useEffect(() => {
    // API 호출로 기존 데이터 가져오기
    setUser({ name: "John Doe", age: 30, city: "Seoul" });
  }, []);

  const handleValidation = () => {
    if (!nameRef.current.value) {
      alert("Name is required!");
      nameRef.current.focus();
      return false;
    }
    if (!ageRef.current.value || isNaN(ageRef.current.value)) {
      alert("Valid age is required!");
      ageRef.current.focus();
      return false;
    }
    if (!cityRef.current.value) {
      alert("City is required!");
      cityRef.current.focus();
      return false;
    }
    return true;
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;

    // 유효성 검사 실행
    if (!handleValidation()) return;

    setUser((prevUser) => ({ ...prevUser, [name]: value }));
    setEditCount((prevCount) => prevCount + 1);

    // 실시간 API 업데이트 (PUT 요청)
    try {
      await fetch("https://67281923270bd0b9755456e8.mockapi.io/api/v1/users", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...user, [name]: value }),
      });
    } catch (err) {
      console.error("Failed to update user:", err);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Update User</h2>
      <form>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            name="name"
            ref={nameRef} // useRef로 DOM에 접근
            value={user.name}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label>Age</label>
          <input
            type="number"
            name="age"
            ref={ageRef} // useRef로 DOM에 접근
            value={user.age}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label>City</label>
          <input
            type="text"
            name="city"
            ref={cityRef} // useRef로 DOM에 접근
            value={user.city}
            onChange={handleChange}
            className="form-control"
          />
        </div>
      </form>
      <p>Total Edits: {editCount}</p>
    </div>
  );
};

export default Update;
