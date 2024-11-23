import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ShowUser = () => {
  const apiUrl = "https://67281923270bd0b9755456e8.mockapi.io/api/v1/users";

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(apiUrl);
      const data = await response.json();

      // birthMonth 필드가 없는 경우 기본값 추가
      const updatedData = data.map((user) => ({
        ...user,
        birthMonth: user.birthMonth || "Not Provided",
      }));
      setUsers(updatedData);
    } catch (err) {
      setError("Failed to fetch users.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("해당 학생 정보를 삭제하시겠습니까?");
    if (!confirmDelete) return;

    try {
      setIsLoading(true);
      const response = await fetch(`${apiUrl}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete user");
      setUsers(users.filter((user) => user.id !== id));
    } catch (err) {
      setError("Error deleting user.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-user/${id}`);
  };

  return (
    <div className="container-fluid mt-3">
      <div className="container text-center mb-4">
        <h2 className="mt-3">👥 User Management</h2>
        <a href="/create-user" className="btn btn-primary my-2">
          ➕ Create User
        </a>
      </div>

      <div className="container d-flex justify-content-center align-items-center">
        <div className="col-8">
          {isLoading && (
            <div className="spinner-border text-primary d-block mx-auto" role="status"></div>
          )}
          {error && <p className="text-danger">{error}</p>}

          <div className="table-responsive">
            <table className="table table-striped table-hover text-center">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>City</th>
                  <th>Birth Month</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? (
                  users.map((user, index) => (
                    <tr key={user.id}>
                      <td>{index + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.age}</td>
                      <td>{user.city}</td>
                      <td>{user.birthMonth}</td>
                      <td>
                        <div className="btn-group">
                          <button
                            className="btn btn-warning btn-sm"
                            title="Edit"
                            onClick={() => handleEdit(user.id)}
                          >
                            ✏️
                          </button>
                          <button
                            className="btn btn-danger btn-sm"
                            title="Delete"
                            onClick={() => handleDelete(user.id)}
                          >
                            🗑️
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center">
                      No Users Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowUser;
