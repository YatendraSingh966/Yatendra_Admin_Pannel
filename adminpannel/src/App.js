import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MainDash from "./components/MainDash";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
      </div>
    </div>
  );
}

export default App;
