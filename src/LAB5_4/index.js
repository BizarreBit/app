import classnames from "classnames";
import style from "./index.module.css";

function NoteIcon({ size = "16" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      class="bi bi-pencil-square"
      viewBox="0 0 16 16"
    >
      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
      <path
        fill-rule="evenodd"
        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
      />
    </svg>
  );
}

function DeleteIcon({ size = "16" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      class="bi bi-trash3-fill"
      viewBox="0 0 16 16"
    >
      <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
    </svg>
  );
}

function Item({ status = 0, topic, date }) {
  const states = ["To do", "Doing", "Done"];
  states.splice(status, 1);
  return (
    <div className={style.item}>
      <div className={style.text}>
        <div>{topic}</div>
        <div>{date}</div>
      </div>
      <div className={style.btns}>
        <button class={classnames(style.btn, style["btn-edit"])}>
          <NoteIcon size="12" />
        </button>
        <button className={classnames(style.btn, style["btn-del"])}>
          <DeleteIcon size="12" />
        </button>
        <button className={classnames(style.btn, style["btn-3"])}>
          <span>{states[0]}</span>
        </button>
        <button className={classnames(style.btn, style["btn-4"])}>
          <span>{states[1]}</span>
        </button>
      </div>
    </div>
  );
}

function ToDo() {
  return (
    <div className={style.list}>
      <div className={style.label}>TO DO</div>
      <Item status={0} topic="Wireframe" date="14/02/2021" />
      <Item status={0} topic="Design Component and API" date="05/01/2021" />
    </div>
  );
}

function Doing() {
  return (
    <div className={style.list}>
      <div className={style.label}>DOING</div>
      <Item status={1} topic="Prototype" date="21/02/2021" />
    </div>
  );
}

function Done() {
  return (
    <div className={style.list}>
      <div className={style.label}>DONE</div>
      <Item status={2} topic="Requirement" date="07/02/2021" />
    </div>
  );
}

export default function LAB5_4() {
  return (
    <div className={style.root}>
      <div className={classnames(style.bar, style.barTwoSide)}>
        <span>To Do List App</span>
        <div>
          <input id="search" placeholder="Search"></input>
          <button className={style.btBar}>Search</button>
          <button className={style.btBar}>Add</button>
        </div>
      </div>
      <div class={style.container}>
        <ToDo />
        <Doing />
        <Done />
      </div>
      <hr />
    </div>
  );
}
