import './CounterChild.css';
import { memo, useMemo } from 'react';

const CounterChild = ({ counter, add, subtract }) => {
  // let superNumber = 0;
  // for (let index = 0; index < 100000000; index++) {
  //   superNumber++;
  // }

  const superNumber = useMemo(() => {
    let myNumber = 0;
    for (let index = 0; index < 100000000; index++) {
      myNumber++;
    }
    return myNumber;
  }, []);

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
        <p>Counter: <b>{counter}</b></p>
        <p>SuperNumber: <b>{superNumber}</b></p>
      </div>
    </>
  );
};

export default memo(CounterChild);
