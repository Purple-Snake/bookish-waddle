import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/navbar/Navbar";
import Info from "./components/info_Page/Info";

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Info />}/>
        <Route path="Kuprine" element/>
      </Routes>
    </div>
  );
}

export default App;
