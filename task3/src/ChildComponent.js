import React from "react";

const ChildComponent = ({ data, users }) => {
  return (
    <div>
      {/* Display Single Object */}
      <h2>Single Object</h2>
      <div className="user-details">
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Age:</strong> {data.age}</p>
        <p><strong>City:</strong> {data.city}</p>
      </div>

      {/* Display Array of Objects */}
      <h2>Array of Objects</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChildComponent;