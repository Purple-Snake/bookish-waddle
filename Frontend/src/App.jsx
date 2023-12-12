import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/navbar/Navbar";
import Info from "./components/info_Page/Info";
import BackPack from "./components/backpack_page/BackPack";
import EssayWizardPage from "./components/essay_wizard_page/EssayWizardPage";

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Info />}/>
        <Route path="/kuprine" element={<BackPack />}/>
        <Route path="/rasinio_vedlys" element={<EssayWizardPage />} />
      </Routes>
    </div>
  );
}

export default App;
