// ChildComponent.jsx

import React, { useContext } from 'react';
import { GlobalContext } from '../App';

function ChildComponent() {

  const { count, increment, decrement } = useContext(GlobalContext);

  return (
    <div>
      <h2>Child Component</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default ChildComponent;
