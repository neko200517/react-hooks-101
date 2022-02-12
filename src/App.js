import React, { useState, useEffect } from 'react';

const App = (props) => {
  const [state, setState] = useState(props);
  const { name, price } = state;

  // 1. レンダリングの後に呼ばれる
  // 2. 状態が変化したときに呼ばれる
  useEffect(() => {
    console.log('This is like componentDidMount or componentDidUpdate.');
  });

  // 1. 一度だけ呼ばれる
  useEffect(() => {
    console.log('This is like componentDitMount');
  }, []);

  // 1. 特定の状態が変更された場合に呼ばれる
  useEffect(() => {
    console.log('This callback is for name only.');
  }, [name]);

  return (
    <>
      <p>
        現在の{name}は、{price}円です。
      </p>
      <button onClick={() => setState({ ...state, price: price + 1 })}>
        +1
      </button>
      <button onClick={() => setState({ ...state, price: price - 1 })}>
        -1
      </button>
      <input
        value={name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
      ></input>
      <button onClick={() => setState(props)}>Reset</button>
    </>
  );
};

App.defaultProps = {
  name: '',
  price: 1000,
};

export default App;
