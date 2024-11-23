import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const createUserApi = "https://67281923270bd0b9755456e8.mockapi.io/api/v1/users";
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", age: "", city: "", birthMonth: "" });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const refs = {
    name: useRef(null),
    age: useRef(null),
    city: useRef(null),
    birthMonth: useRef(null),
  };

  const validateInputs = () => {
    for (const [key, ref] of Object.entries(refs)) {
      if (!ref.current.value) {
        alert(`${key.charAt(0).toUpperCase() + key.slice(1)} is required!`);
        ref.current.focus();
        return false;
      }
      if (key === "age" && (isNaN(ref.current.value) || ref.current.value <= 0)) {
        alert("Valid age is required!");
        ref.current.focus();
        return false;
      }
    }
    return true;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateInputs()) return;

    try {
      const response = await fetch(createUserApi, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      setUser({ name: "", age: "", city: "", birthMonth: "" });
      setSuccessMessage("User created successfully!");
      setTimeout(() => {
        setSuccessMessage("");
        navigate("/show-user");
      }, 2000);
    } catch (error) {
      setError("Failed to create user. Please try again.");
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow-lg p-4" style={{ maxWidth: "500px", width: "100%" }}>
        <h2 className="text-center mb-4">➕ Create User</h2>
        {error && <div className="alert alert-danger text-center">{error}</div>}
        {successMessage && <div className="alert alert-success text-center">{successMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              ref={refs.name}
              value={user.name}
              onChange={handleInputChange}
              placeholder="Enter name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="number"
              className="form-control"
              id="age"
              name="age"
              ref={refs.age}
              value={user.age}
              onChange={handleInputChange}
              placeholder="Enter age"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="city"
              name="city"
              ref={refs.city}
              value={user.city}
              onChange={handleInputChange}
              placeholder="Enter city"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="birthMonth" className="form-label">
              Birth Month
            </label>
            <select
              className="form-control"
              id="birthMonth"
              name="birthMonth"
              ref={refs.birthMonth}
              value={user.birthMonth}
              onChange={handleInputChange}
            >
              <option value="">Select Month</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
