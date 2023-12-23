import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/navbar/Navbar";
import Info from "./components/info_Page/Info";
import BackPack from "./components/backpack_page/BackPack";
import EssayWizardPage from "./components/essay_wizard_page/EssayWizardPage";
import OtherInfoPage from "./components/other_info_page/OtherInfoPage";

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Info />}/>
        <Route path="/kuprine" element={<BackPack />}/>
        <Route path="/rasinio_vedlys" element={<EssayWizardPage />} />
        <Route path="/kita_informacija" element={<OtherInfoPage />} />
      </Routes>
    </div>
  );
}

export default App;
