import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const createUserApi = "https://67281923270bd0b9755456e8.mockapi.io/api/v1/users";
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", age: "", city: "" });
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(createUserApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      setUser({ name: "", age: "", city: "" });
      navigate("/show-user");
    } catch (error) {
      setError("Failed to create user. Please try again.");
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow-lg p-4" style={{ maxWidth: "500px", width: "100%" }}>
        <h2 className="text-center mb-4">➕ Create User</h2>
        {error && <div className="alert alert-danger text-center">{error}</div>}
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
              value={user.name}
              onChange={handleInputChange}
              placeholder="Enter name"
              required
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
              value={user.age}
              onChange={handleInputChange}
              placeholder="Enter age"
              required
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
              value={user.city}
              onChange={handleInputChange}
              placeholder="Enter city"
              required
            />
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
