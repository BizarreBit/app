import classnames from 'classnames';
import style from "./index.module.css";

export default function LAB5_2() {
    return (
      <>
        <div>
          <div>
            <button>Add</button>
          </div>
          <div>
            <span
              style={{
                color: "green",
                "text-decoration-line": "line-through",
                "margin-right": "0.5em",
              }}
            >
              Task 1
            </span>
            <button style={{ "margin-left": "1em" }}>Edit</button>
            <button style={{ "margin-left": "1em" }}>Del</button>
          </div>
          <div>
            <span style={{ "margin-right": "0.5em" }}>Task 2</span>
            <button style={{ "margin-left": "1em" }}>Edit</button>
            <button style={{ "margin-left": "1em" }}>Del</button>
          </div>
        </div>
        <div>
          <div>
            <button>Add</button>
          </div>
          <div>
            <span className={classnames(style.taskName, style.crossOut)}>Task 1</span> 
            <button className={style.button}>Edit</button>
            <button className={style.button}>Del</button>
          </div>
          <div>
            <span className={style.taskName}>Task 2</span>
            <button className={style.button}>Edit</button>
            <button className={style.button}>Del</button>
          </div>
        </div>
        <hr />
      </>
    );
  }