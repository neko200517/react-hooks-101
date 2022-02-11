import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  // 以前の値を参照する
  const increment2 = () => {
    setCount((previosCount) => previosCount + 1);
  };

  const decrement2 = () => {
    setCount((previosCount) => previosCount - 1);
  };

  const reset2 = () => {
    setCount(resetValue());
  };

  const resetValue = () => {
    return 0;
  };

  const double = () => {
    setCount(count * 2);
  };

  const divide3 = () => {
    setCount(count % 3 === 0 ? count / 3 : count);
  };

  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={reset}>0</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={reset2}>0</button>
      </div>
      <div>
        <button onClick={double}>*2</button>
        <button onClick={divide3}>3の倍数のときだけ3で割る</button>
      </div>
    </>
  );
};

export default App;
