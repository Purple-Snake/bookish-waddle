import "./App.css";
import NavigationBar from "./components/navbar/Navabar";
import Info from "./components/info_Page/Info";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Info />}/>
      </Routes>
    </div>
  );
}

export default App;
