import classnames from "classnames";
import style from "./index.module.css";

function PlayerScore({ player, red = false }) {
  //   let cls = red ? "block blockRed playerScore" : "block playerScore";
  return (
    // <div className={cls}>
    <div
      className={classnames(
        style.block,
        { [style.blockRed]: red },
        style.playerScore
      )}
    >
      <div>PLAYER {player}</div>
      <div className={style.score}>
        <span>0</span>
      </div>
    </div>
  );
}

function Control() {
  return (
    <div className={classnames(style.block, style.control)}>
      <div>
        <button className={classnames(style.bt, style.btRed)}>Roll</button>
        <button className={classnames(style.bt, style.btGreen)}>Keep</button>
      </div>
      <div className={style.rollResult}>1</div>
      <div>Round Score : 0</div>
    </div>
  );
}

export default function LAB5_3() {
  return (
    <div className={style.root}>
      <div className={style.bar}>
        <div>
          <button>New Game</button>
        </div>
      </div>
      <div className={style.panel}>
        <PlayerScore red={true} player="1" />
        <Control />
        <PlayerScore player="2" />
      </div>
      <div></div>
      <hr />
    </div>
  );
}
