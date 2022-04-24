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

function LAB7_1SOL() {
  const [show, setShow] = useState(true);
  if (!show) {
    return null;
  }
  return (
    <div>
      <button onClick={() => setShow(false)}>Click to hide me</button>
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
function LAB7_2SOL() {
  const [showText, setShowText] = useState(true);

  return (
    <div>
      <button onClick={() => setShowText(false)}>Click to hide text</button>
      {showText ? <h1>Text</h1> : null}
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

function LAB7_3SOL() {
  const [show, setShow] = useState(true);
  const btnText = show ? "Hide" : "Show";
  const text = show ? <h3>Lorem ipsum</h3> : null;
  return (
    <div>
      <button onClick={() => setShow(!show)}>{btnText}</button>
      {text}
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

function LAB7_4SOL() {
  const [amount, setAmount] = useState("");
  return (
    <div>
      <label>Enter Dollar: </label>
      <input
        type="text"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
      />
      <p>
        Convert to Baht: <span style={{ color: "red" }}>{amount * 30}</span>{" "}
        Baht
      </p>
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

function LAB7_5SOL() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const errorMessage =
    error === "" ? null : <p style={{ color: "red" }}>{error}</p>;

  const handleClickCheck = () => {
    if (phone === "") {
      setError("Phone number is required");
    } else if (isNaN(phone.trim())) {
      setError("Invalid phone number");
    } else if (phone.length !== 10) {
      setError("Invalid length");
    } else {
      setError("");
      alert("Your number is valid");
    }
  };

  const style = error === "" ? null : { borderColor: "red" };

  return (
    <div>
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={style}
      />
      <button onClick={handleClickCheck}>Check</button>
      {errorMessage}
    </div>
  );
}

const mapProvinceDistrict = {
  BANGKOK: ["BANGBON", "BANGKHAE", "BANGKAPI"],
  PHUKET: ["KATHU", "THALANG"],
  RANONG: ["KRA BURI", "KA POE"],
};

function LAB7_6() {
  const [province, setProvice] = useState("");
  const provinceOptions = Object.keys(mapProvinceDistrict).map(
    (province, index) => {
      return <option key={index}>{province}</option>;
    }
  );
  const districtOptions =
    province === ""
      ? null
      : mapProvinceDistrict[province].map((eachProvince, index) => (
          <option key={index}>{eachProvince}</option>
        ));

  return (
    <div>
      <div>
        <label>Province : </label>
        <select value={province} onChange={(e) => setProvice(e.target.value)}>
          <option value="" disabled selected>
            Select
          </option>
          {provinceOptions}
        </select>
      </div>
      <div>
        <label>District : </label>
        <select>
          <option value="" disabled selected>
            Select
          </option>
          {districtOptions}
        </select>
      </div>
    </div>
  );
}

function LAB7_6SOL() {
  const [selectedProvince, setSelectedProvince] = useState("");
  const option =
    selectedProvince === ""
      ? null
      : mapProvinceDistrict[selectedProvince].map((el) => (
          <option value={el}>{el}</option>
        ));
  return (
    <div>
      <div>
        <label>Province : </label>
        <select
          value={selectedProvince}
          onChange={(e) => setSelectedProvince(e.target.value)}
        >
          <option value="">SELECT</option>
          <option value="BANGKOK">BANGKOK</option>
          <option value="PHUKET">PHUKET</option>
          <option value="RANONG">RANONG</option>
        </select>
      </div>
      <div>
        <label>District : </label>
        <select>
          <option value="">SELECT</option>
          {option}
        </select>
      </div>
    </div>
  );
}
function App() {
  return (
    <div>
      <LAB7_1SOL />
      <LAB7_1 />
      <LAB7_2SOL />
      <LAB7_2 />
      <LAB7_3SOL />
      <LAB7_3 />
      <LAB7_4SOL />
      <LAB7_4 />
      <LAB7_5SOL />
      <LAB7_5 />
      <LAB7_6SOL />
      <LAB7_6 />
    </div>
  );
}

export default App;
