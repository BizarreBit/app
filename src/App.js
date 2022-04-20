import "./App.css";
import { useState } from "react";

function LAB7_1() {
  const [visibility, setVisibility] = useState("visible");
  return (
    <div>
      <button
        style={{ visibility: visibility }}
        onClick={() => setVisibility("hidden")}
      >
        Click to hide me
      </button>
      <hr />
    </div>
  );
}
function LAB7_2() {
  const [visibility, setVisibility] = useState("visible");
  return (
    <div>
      <button onClick={() => setVisibility("hidden")}>
        Click to hide text
      </button>
      <h1 style={{ visibility: visibility }}>Text</h1>
      <hr />
    </div>
  );
}
function LAB7_3() {
  const [state, setState] = useState({
    visibility: "visible",
    buttonText: "Hide",
  });
  return (
    <div>
      <button
        onClick={() =>
          setState((curState) => ({
            visibility:
              curState.visibility === "visible" ? "hidden" : "visible",
            buttonText: curState.buttonText === "Hide" ? "Show" : "Hide",
          }))
        }
      >
        {state.buttonText}
      </button>
      <h1 style={{ visibility: state.visibility }}>Lorem ipsum dolor sit.</h1>
      <hr />
    </div>
  );
}

function LAB7_4() {
  const [baht, setBaht] = useState(0);
  return (
    <div>
      <div>
        Enter Dollar:
        <input
          id="inputDollar"
          onChange={() =>
            setBaht(document.getElementById("inputDollar").value * 30)
          }
        />
      </div>
      <div>Convert to Baht: {baht.toLocaleString()} Baht</div>
      <hr />
    </div>
  );
}

function LAB7_5() {
  const warningText = [
    "Phone number is required",
    "Phone number is invalid",
    "Invalid length",
    "Your number is valid",
  ];
  const invalidClass = "invalidForm";
  const [state, setState] = useState(0);

  return (
    <div id="form" className={invalidClass}>
      <input
        id="phoneNumber"
        placeholder="Phone Number"
        onChange={() =>
          setState(() => {
            let curState = 0;
            const inputValue = document.getElementById("phoneNumber").value;
            const form = document.getElementById("form");
            form.classList.add(invalidClass);
            if (inputValue === "") {
              curState = 0;
            } else if (isNaN(+inputValue)) {
              curState = 1;
            } else if (inputValue.length !== 10) {
              curState = 2;
            } else {
              form.classList.remove(invalidClass);
              curState = 3;
            }
            return curState;
          })
        }
      />{" "}
      <button
        onClick={() => {
          if (state === 3) alert(warningText[state]);
        }}
      >
        Check
      </button>
      <br />
      <div className="warn">{warningText[state]}</div>
      <hr />
    </div>
  );
}

function LAB7_6() {
  return (
    <div>
      <div>
        <span>Province : </span>
        <select>
          <option value="" disabled selected>
            Select
          </option>
        </select>
      </div>
      <div>
        <span>District : </span>
        <select>
          <option value="" disabled selected>
            Select
          </option>
        </select>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <LAB7_1 />
      <LAB7_2 />
      <LAB7_3 />
      <LAB7_4 />
      <LAB7_5 />
      <LAB7_6 />
    </div>
  );
}

export default App;
