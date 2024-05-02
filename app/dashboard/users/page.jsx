import React from "react";
import "./page.css";

const fetchProducts = () => {
  return fetch("https://reqres.in/api/users")
    .then((response) => response.json())
    .then((data) => data.data);
};

const page = async () => {
  const data = await fetchProducts();
  return (
    <div className="user-container">
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <img src={user.avatar} alt="#" />
              </td>
              <td>
                {user.first_name} {user.last_name}
              </td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default page;
