import { useState } from "react";
import "./App.css";

function LAB8_1() {
  const arr = ["Friend1", "Friend2", "Friend3"];
  return (
    <>
      <ul>
        {arr.map((al, id) => (
          <li key={id}>{al}</li>
        ))}
      </ul>
      <hr />
    </>
  );
}

class Post {
  constructor(id, message, date, name) {
    this.key = id;
    this.message = message;
    this.date = date;
    this.name = name;
  }
}

function LAB8_2() {
  const arrPost = [
    new Post(0, "message1", "31/12/2000", "Poster"),
    new Post(1, "message2", "30/09/2001", "Toaster"),
  ];
  return (
    <>
      <ul>
        {arrPost.map((el) => (
          <li key={el.key}>
            <p>{el.message}</p>
            <div>{el.name}</div>
            <div>{el.date}</div>
          </li>
        ))}
      </ul>
      <hr />
    </>
  );
}

function LAB8_3() {
  const arrPost = [
    new Post(0, "Happy New Year", "1/1/2021 00:01AM", "John"),
    new Post(1, "Programing is fun", "30/6/2021 10:23AM", "Jack"),
    new Post(2, "Oh Amazing !!!", "23/7/2021 06:17PM", "Sarah"),
  ];
  const Card = ({ id, message, date, name }) => (
    <li key={id}>
      <div
        style={{ border: "1px solid black", padding: "0 1rem", margin: "1rem" }}
      >
        <h2>{message}</h2>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>
            Author: <span>{name}</span>
          </p>
          <p>{date}</p>
        </div>
      </div>
    </li>
  );
  return (
    <>
      <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
        {arrPost.map((el) => (
          <Card {...el} />
        ))}
      </ul>
      <hr />
    </>
  );
}

class TaskConstructor {
  constructor(task, isFinished = false) {
    this.id = taskID++;
    this.task = task;
    this.isFinished = isFinished;
  }
}

let taskID = 0;

const TaskItem = ({
  deleteTaskItem,
  updateTaskItem,
  taskItem: { id, task, isFinished },
}) => {
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState(task);

  const handleEditToggle = () => {
    updateTaskItem(id, { task: input });
    setEdit(!edit);
  };

  const style = isFinished
    ? { color: "green", textDecorationLine: "line-through" }
    : null;

  return (
    <li key={id}>
      {edit ? (
        <span>
          <input value={input} onChange={(e) => setInput(e.target.value)} />
        </span>
      ) : (
        <span
          onClick={() => updateTaskItem(id, { isFinished: !isFinished })}
          style={style}
        >
          {task}
        </span>
      )}

      <button onClick={handleEditToggle} style={{ marginLeft: "1rem" }}>
        Edit
      </button>
      <button onClick={() => deleteTaskItem(id)} style={{ marginLeft: "1rem" }}>
        Delete
      </button>
    </li>
  );
};

const SearchBar = ({ setSearchText }) => {
  const [input, setInput] = useState("");

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setSearchText(input)}>Search</button>
    </div>
  );
};

function LAB8_4_5() {
  const [taskList, setTaskList] = useState([
    new TaskConstructor("Task1", true),
    new TaskConstructor("Task2"),
  ]);
  const [searchText, setSearchText] = useState("");

  const handleTaskAdd = () =>
    setTaskList((currentList) => [
      new TaskConstructor(document.getElementById("taskInput").value),
      ...currentList,
    ]);

  const deleteTaskItem = (id) => {
    const newTaskList = [...taskList];
    const idx = taskList.findIndex((el) => el.id === id);
    newTaskList.splice(idx, 1);
    setTaskList(newTaskList);
  };

  const updateTaskItem = (id, itemProp) => {
    const newTaskList = [...taskList];
    const idx = taskList.findIndex((el) => el.id === id);
    newTaskList[idx] = { ...taskList[idx], ...itemProp };
    setTaskList(newTaskList);
  };

  const searchedTaskList = taskList.filter((taskItem) =>
    taskItem.task.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <SearchBar setSearchText={setSearchText} />
      <div>
        <input id="taskInput" type="text"></input>
        <button onClick={handleTaskAdd}>Add</button>
      </div>
      <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
        {searchedTaskList.map((taskItem) => (
          <TaskItem
            key={taskItem.id}
            deleteTaskItem={deleteTaskItem}
            updateTaskItem={updateTaskItem}
            taskItem={taskItem}
          />
        ))}
      </ul>
      <hr />
    </div>
  );
}

function App() {
  return (
    <div>
      <LAB8_1 />
      <LAB8_2 />
      <LAB8_3 />
      <LAB8_4_5 />
    </div>
  );
}

export default App;
