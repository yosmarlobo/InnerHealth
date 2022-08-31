import "./App.css";
import "./css/bootstrap.css";
import "./css/app2.css";
import "./css/estilos.css";

import "./css/app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notfound from "./components/Notfound";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import SidebarPacient from "./components/SidebarPacient";
import SobreNosotros from "./pages/SobreNosotros";
import SidebarDr from "./components/SidebarDr";
import SignUpPacient from "./pages/SignUpPacient";
import SignUpDr from "./pages/SignUpDr";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup/" element={<SignUpPacient />} />
        <Route path="/signupDr/" element={<SignUpDr />} />
        <Route path="/SobreNosotros" element={<SobreNosotros />} />
        <Route path="/login" element={<Login />} />
        <Route path="/InnerHealth/*" element={<SidebarPacient />} />
        <Route path="/InnerHealthDr/*" element={<SidebarDr />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
