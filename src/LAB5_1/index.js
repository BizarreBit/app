import style from "./index.module.css";
export default function LAB5_1() {
    return (
      <div>
        <div>
          <button>+</button>
          <span style={{ margin: "0 1em" }}>0</span>
          <button>-</button>
          <button style={{ margin: "0 1em" }}>Reset</button>
        </div>
        <div>
          <button>+</button>
          <span className={style.external}>0</span>
          <button>-</button>
          <button className={style.external}>Reset</button>
        </div>
        <hr />
      </div>
    );
  }