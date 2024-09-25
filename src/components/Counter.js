import React, { useState } from "react";
import "./counter.css";

const Counter = () => {
  var [count, setCount] = useState(1);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count === 0) {
      alert("Can not decrement below 0");
      return;
    }

    setCount(count - 1);
  };

  return (
    <div className="counter_wrapper">
      <div className="counter_display">{count}</div>
      <div className="buttons">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
