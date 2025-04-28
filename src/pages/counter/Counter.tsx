import React, { useState } from "react";
import "./Counter.css";
import useCounterStore from "../../store/CounterStore";

const Counter: React.FC = () => {
  const { count, increment, reset } = useCounterStore();

  return (
    <div className="counter">
      <h2>Counter Page</h2>
      <p>Current Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
