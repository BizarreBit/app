// import "./App.css";
import Welcome from "./Welcome";
import styles from './App.module.css'

function App() {
  // const divStyle = { color: "red", textAlign: 'center', margin: '20px 10px', padding: 10 }
  // return <div style={divStyle}>Hello React Basic Styling</div>;
  return (
    <div className={styles.container}>
      <div className="main-div">Hello React Basic Styling</div>;
      <div className={styles['main-div']}>Hello React Basic Styling</div>;
      <div className="text-success">Hello React Basic Styling</div>;
      <Welcome />
    </div>
  );
}

export default App;
