// import logo from "./logo.svg";
import { DndProvider } from "react-dnd";
import "./App.scss";
import Main from "./components/Main/Main";
import ExtraSidebar from "./components/ExtraSidebar/ExtraSidebar";
import Sidebar from "./components/Sidebar/Sidebar";
import { HTML5Backend } from "react-dnd-html5-backend";
import { AppWrapper } from "./appStyles";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <AppWrapper>
        <Sidebar />
        <ExtraSidebar />
        <Main />
      </AppWrapper>
    </DndProvider>
  );
}

export default App;
