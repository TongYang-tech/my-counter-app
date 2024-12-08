import { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => { setCount(count + 1) };
  const decrement = () => { setCount(count - 1) };
  return (
    <>
      <header>
        <h1>Counter</h1>
      </header>
      <main>
        <p>{count}</p>
        <div>
          <button type="button" onClick={decrement}>
            -
          </button>
          <button type="button" onClick={increment}>
            +
          </button>
        </div>
      </main>
    </>
  );
};

export default App;