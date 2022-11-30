import './CounterChild.css';
import { memo } from 'react';

const CounterChild = ({ counter, add, subtract }) => {
  console.log('Counter Child rendered');
  return (
    <>
      <div className="box-container">
        <h2>Counter Child</h2>
        <button className="btn" onClick={add}>
          +
        </button>
        <button className="btn" onClick={subtract}>
          -
        </button>
        <p>{counter}</p>
      </div>
    </>
  );
};

export default memo(CounterChild);
