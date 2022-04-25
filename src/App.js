import { useState } from "react";
import "./App.css";

// const b = 0;
// const c = null;
// const d = "Hello";
// const a = b && c && d;

function App() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "Hide" : "Show"}
      </button>
      {show && <p>Lorem ipsum</p>}
    </div>
  );
}

export default App;

const todoList = [
  { title: "Watching a movie", completed: true, id: 1 },
  { title: "Watching a movie", completed: false, id: 2 },
];

const pendingList = todoList.filter(el => el.completed === false);
const searchText = 'mov'