import "./App.css";

function App() {
  // const handleClick = event => console.log(event);
  const handleClick = (event, id) => console.log(id);
  const handleClick2 = id => event => console.log(id);

  function handleSubmitForm(event) {
    event.preventDefault();
    console.log('Submitted')
  }

  const handleChangeEmail = function (event) {
    console.log(event.target.value)
  };
  return (
    <div className="App">
      {/* <button
        onClick={function () {
          console.log("Clicked");
        }}
      >
        Click Me
      </button> */}
      {/* <button onClick={handleClick}>Click Me</button> */}
      <button onClick={(event) => handleClick(event, 2)}>Click Me</button>
      <button onClick={handleClick2(3)}>Click Me</button>

      <form onSubmit={handleSubmitForm}>
        <input name="email" onChange={handleChangeEmail} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
