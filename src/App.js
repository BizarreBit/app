import { useState, useEffect } from "react";
import axios from "axios";
import Message from "./Message";

// let cat = "Meow";

// function a() { //Side Effects
//   cat = "Mao";
//   // feature that request something from a server (sent network request)
//   document.title="abc";
//   localStorage.set('token', '123456');
// }

// function sum(a, b) {
//   return a + b;
// }

function App() {
  console.log("App run");
  const [todo, setTodo] = useState({});
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  // //useEffect(effectfn, dependencyarray)

  // useEffect(()=> {
  //   console.log('First Effect Function run');
  // });
  // useEffect(()=> {
  //   console.log('Second Effect Function run');
  // },[toggle, toggle2]);

  // useEffect(() => {
  //   console.log("Effect run: Before axios");
  //   const result = axios
  //   .get("https://jsonplaceholder.typicode.com/todos/1")

  //     console.log("Effect run: axios.then");
  //     console.log(respond.data);
  //     setTodo(respond.data); //causing infinite rerender if not use "useEffect" and set dependencyArray to others except itself state
  //   });
  //   console.log("Effect run: After axios");
  // }, [toggle]);

  //   .then((respond) => {

  // useEffect(() => {
  //   console.log("Function run");
  //   return () => {
  //     console.log("Cleaning up an effect");
  //   };
  // });

  console.log("Before return");
  return (
    <div>
      <h1>{todo.title}</h1>
      <button onClick={() => setToggle((prev) => !prev)}>Click</button>
      <button onClick={() => setToggle2((prev) => !prev)}>Click2</button>
      {toggle && <Message />}
    </div>
  );
}

export default App;
