import {useState} from 'react'
import "./App.css";

let id = 3;

function App() {
  const arr = [1, 2, 3, 4];
  const jsxArr = [<li>1</li>, <li>2</li>, <li>3</li>, <li>4</li>];
  const result = arr.map((el) => <li>{el}</li>);

  const [obj, setObj] = useState([
    { id: 1, title: "A" },
    { id: 2, title: "B" },
  ]);

  const handleClick = () => {
    const input = window.prompt("Enter Something");
    const newState = [{ id: id++, title: input }, ...obj];
    setObj(newState);
  };

  return (
    <div>
      <button onClick={handleClick}>Add</button>
      <ul>
        {/* <li>{arr[0]}</li>
        <li>{arr[1]}</li>
        <li>{arr[2]}</li>
        <li>{arr[3]}</li> */}
        {/* {jsxArr} */}
        {/* {result} */}
        {obj.map((el) => (
          <li key={el.id}>{el.title}</li>
        ))}
        {/* {arr.map((el, index) => (
          <li key={index}>{el}</li>
        ))} */}
      </ul>
    </div>
  );
}

export default App;
