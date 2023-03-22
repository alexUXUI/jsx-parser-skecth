import React from 'react';
import { useState } from 'react';
import JsxParser from 'react-jsx-parser';
import './App.css';

function Test() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  );
}

function App() {
  const sentence =
    'I am a markdown string. This is a react component: <Test />';

  return <JsxParser components={{ Test }} jsx={sentence} />;
}

export default App;
