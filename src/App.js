import { 
  BrowserRouter,
  Routes,
  Route,
 } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Cancha from "./pages/cancha/Cancha";
import { MainLogin } from "./pages/LogIn/LogIn";
import { Register } from "./pages/Register/Register";
import { Bernabeu } from "./components/Bernabeu/Bernabeu";
import { Pasa1 } from "./components/Pasa1/Pasa1";
import { Campnou } from "./components/Campnou/Campnou";
import { SanSiro } from "./components/SanSiro/SanSiro";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/canchas" element={<List/>}/>
      <Route path="/canchaMuestra" element={<Cancha/>}/>
      <Route path="/login" element={<MainLogin/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/CanchaBernabeu" element={<Bernabeu/>}/>
      <Route path="/CanchaCampnou" element={<Campnou/>}/>
      <Route path="/CanchaSanSiro" element={<SanSiro/>}/>
      <Route path="/PasarelaDePagos" element={<Pasa1/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
