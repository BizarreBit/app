import "./App.css";
import { Welcome, sum } from "./Welcome";
import { Hello } from "./components/Hello";
// import A from "./pages/Home";
import Home, {day} from "./pages/Home";
import Login from './Login';
function App() {
  const result = sum(20, 50)
  return (
    <div>
      Hello React {result} {day}
      <Welcome />
      <Hello />
      <Home />
      <Login />
    </div>
  );
}

export default App;
