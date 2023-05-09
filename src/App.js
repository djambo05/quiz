import "./index.scss";

const Game = () => {
  return (
    <>
      <div className="progress">
        <div style={{ width: "50%" }} className="progress__inner"></div>
      </div>
      <h1>h1h1h1h1h</h1>
      <ul>
        <li>li</li>
        <li>li</li>
        <li>li</li>
      </ul>
    </>
  );
};
function App() {
  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;
