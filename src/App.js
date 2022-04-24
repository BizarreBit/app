import { useState } from "react";
import "./App.css";

function Count() {
  const [count, setCount] = useState(0);
  const handleClickAdd = () => {
    setCount(5); //Not current state : Asynchonous
    // setCount(count + 1);
    setCount(prevCount => prevCount + 1);
  }
  return (
    <div>
      <div>{count}</div>
      {/* <button onClick={() => setCount(count + 1)}>Click</button> */}
      <button onClick={handleClickAdd}>+</button>
    </div>
  );
}

function App() {
  let [country, setCountry] = useState("Thailand"); // Array [state, Update Function]
  let [population, setPopulation] = useState(1000);

  const handleChange = (event) => {
    let value = event.target.value;
    setCountry(value);
    // country = value
  };

  return (
    <div className="App">
      <Count />
      <hr />
      <input type="text" onChange={handleChange} />
      <h1>{country}</h1>
      <input
        type="text"
        onChange={(event) => setPopulation(event.target.value)}
      />
      <h1>{population}</h1>
    </div>
  );
}

export default App;
