// import logo from "./logo.svg";
import "./App.scss";
import Board from "./components/Board/Board";
import ExtraSidebar from "./components/ExtraSidebar/ExtraSidebar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <ExtraSidebar />
      <Board />
    </div>
  );
}

export default App;
