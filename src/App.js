import "./App.css";

function App() {
  return (
    <div>
      <div>
        <label htmlFor="province">Province : </label>
        <select id="province">
          <option value="" disabled selected hidden>
            Select
          </option>
          <option value="bangkok">Bangkok</option>
        </select>
      </div>

      <div>
        <label htmlFor="district">District : </label>
        <select id="district">
          <option value="district" disabled selected hidden>
            Select
          </option>
          <option value="bangchak">Bangchak</option>
        </select>
      </div>
    </div>
  );
}

export default App;
