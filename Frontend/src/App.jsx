import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/navbar/Navbar";
import Info from "./components/info_Page/Info";
import BackPack from "./components/backpack_page/BackPack";

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Info />}/>
        <Route path="/Kuprine" element={<BackPack />}/>
      </Routes>
    </div>
  );
}

export default App;
