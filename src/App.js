import "./App.css";

const STATES = ["To do", "Doing", "Done"];

function ButtonGroup({ status = 0 }) {
  const states = [...STATES];
  states.splice(status, 1);
  return (
    <div
      className="btn-group"
      role="group"
      aria-label="List Item Editing Button Group"
    >
      <button type="button" className="btn btn-sm btn-outline-primary">
        <i className="bi bi-pencil-square" />
      </button>
      <button type="button" className="btn btn-sm btn-outline-danger">
        <i className="bi bi-trash3-fill" />
      </button>
      <button type="button" className="btn btn-sm btn-outline-info text-nowrap">
        {states[0]}
      </button>
      <button type="button" className="btn btn-sm btn-outline-success">
        {states[1]}
      </button>
    </div>
  );
}

function Item({
  index = 0,
  title = "What to do",
  date = "31/12/2000",
  status = 0,
}) {
  return (
    <li key={index} className="list-group-item d-flex align-items-center my-2">
      <div className="flex-grow-1">
        <h5 className="card-title fs-6">{title}</h5>
        <p className="card-text text-muted small">{date}</p>
      </div>
      <ButtonGroup status={status} />
    </li>
  );
}

class ItemObject {
  constructor(title = "What to do", date = "31/12/2000") {
    this.title = title;
    this.date = date;
  }
}

function ListCard({ list = [new ItemObject()], status = 0 }) {
  return (
    <div className="card mt-3">
      <h5 className="card-header fs-6">{STATES[status].toUpperCase()}</h5>
      <ul className="list-group list-group-flush">
        {list.map((item, index) => (
          <Item index={index} status={status} {...item} />
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-info" href="/">
            Todo List App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-info mx-2" type="submit">
                Search
              </button>
              <button className="btn btn-outline-info" type="submit">
                Add
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <ListCard
              list={[
                new ItemObject("Wireframe", "14/02/2021"),
                new ItemObject("Design Component and API", "05/03/2021"),
              ]}
              status={0}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <ListCard
              list={[new ItemObject("Prototype", "21/02/2021")]}
              status={1}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <ListCard
              list={[new ItemObject("Requirement", "07/02/2021")]}
              status={2}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
