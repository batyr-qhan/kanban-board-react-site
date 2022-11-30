// import logo from "./logo.svg";
import { DndProvider } from "react-dnd";
import "./App.scss";
import Board from "./components/Board/Board";
import ExtraSidebar from "./components/ExtraSidebar/ExtraSidebar";
import Sidebar from "./components/Sidebar/Sidebar";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Sidebar />
        <ExtraSidebar />
        <Board />
      </div>
    </DndProvider>
  );
}

export default App;
