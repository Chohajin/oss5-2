import React from "react";
import { Link } from "react-router-dom";

const List = () => {
  return (
    <div>
      <h2>User List</h2>
      <Link to="/detail">Go to Detail</Link>
    </div>
  );
};

export default List;
