import './App.css';
import { useState } from 'react';

function Count() {
  const [count, setCount] = useState(0);
  return <div>
    <div>{count}</div>
    <button onClick={ () => setCount(count + 1)}>Click</button>
  </div>;

}

function App() {
  return (
    <div className="App">
      <Count />
    </div>
  );
}

export default App;
