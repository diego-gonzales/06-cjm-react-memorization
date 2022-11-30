import { useState, useCallback } from 'react';
import './Counter.css';
import CounterChild from './CounterChild';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState('');

  // Without memorization
  // const add = () => setCounter(counter + 1);
  // const subtract = () => setCounter(counter - 1);

  // With memorization. We prevent that when the state of 'inputValue' changes, the  CounterChild component rendered again.
  const add = useCallback(() => setCounter(counter + 1), [counter]);
  const subtract = useCallback(() => setCounter(counter - 1), [counter]);

  const handleInputChange = (e) => setInputValue(e.target.value);

  return (
    <>
      <div className="container">
        <h2>Counter</h2>
        <button className="btn" onClick={add}>
          +
        </button>
        <button className="btn" onClick={subtract}>
          -
        </button>
        <p>{counter}</p>
      </div>

      <div className="container">
        <h2>Input</h2>
        <form>
          <input type="text" onChange={handleInputChange} value={inputValue} />
        </form>
      </div>

      <div className="container">
        <CounterChild counter={counter} add={add} subtract={subtract} />
      </div>
    </>
  );
};

export default Counter;
