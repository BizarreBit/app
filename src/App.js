import "./App.css";

function App() {
  const handleInput = (event) => console.log(event.target.value);

  const handleCheckBox = (event) => {
    console.log(event.target.name);
    console.log(event.target.labels[0].innerHTML);
    console.log(event.target.value);
    console.log(event.target.checked ? 'Ticked' : 'Unticked');
  };

  const handleLink = () => {
    if (window.confirm("Leave for https://google.com?"))
      window.location.href = "https://google.com";
  };

  const handleClick = (event) => {
    event.preventDefault();
    const redirect = window.confirm('Leave for https://google.com?');
    if (redirect) {
      window.location.assign("https://google.com");
    }
  }

  return (
    <div className="App">
      <div>
        <input onChange={handleInput} />
      </div>

      <div>
        <select onChange={handleInput}>
          <option>Thailand</option>
          <option>Japan</option>
          <option>China</option>
          <option>Malaysia</option>
          <option>Laos</option>
        </select>
      </div>

      <div>
        <input
          type="checkbox"
          name="phoneBrand"
          id="samsung"
          value="Samsung"
          onChange={handleCheckBox}
        />
        <label htmlFor="samsung">Samsung</label>
        <input
          type="checkbox"
          name="phoneBrand"
          id="xiaomi"
          value="XiaoMi"
          onChange={handleCheckBox}
        />
        <label htmlFor="xiaomi">Xiaomi</label>
        <input
          type="checkbox"
          name="phoneBrand"
          id="nokia"
          value="Nokia"
          onChange={handleCheckBox}
        />
        <label htmlFor="nokia">Nokia</label>
      </div>

      <div>
        <a href="#" onClick={handleLink}>
          Google
        </a>
        <br/>
        <a href="https://google.com" onClick={handleClick}>
          Google
        </a>
      </div>
    </div>
  );
}

export default App;
