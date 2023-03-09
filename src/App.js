import logo from "./logo.svg";
import Board from "./board.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Board />
      </header>
    </div>
  );
}

export default App;
