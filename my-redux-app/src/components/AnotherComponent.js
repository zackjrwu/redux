// AnotherComponent.js
import React from "react";
import { useSelector } from "react-redux";

const AnotherComponent = () => {
  const count = useSelector((state) => state.count);

  return (
    <div>
      <p>Count from AnotherComponent: {count}</p>
    </div>
  );
};

export default AnotherComponent;
