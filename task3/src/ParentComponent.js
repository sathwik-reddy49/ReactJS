import React from "react";
import ChildComponent from "./ChildComponent";
import "./ParentComponent.css";

const ParentComponent = () => {
  // Single object
  const userData = {
    name: "Sathwik",
    age: 22,
    city: "Hyderabad",
  };

  // Array of objects
  const users = [
    { id: 1, name: "Sathwik", age: 22 },
    { id: 2, name: "John", age: 25 },
    { id: 3, name: "Doe", age: 28 },
  ];

  return(
    <div className="parent-container">
      <ChildComponent data={userData} users={users} />
    </div>
  );
};

export default ParentComponent;