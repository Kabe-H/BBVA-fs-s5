import { Route, Routes } from "react-router-dom";
import "./App.css";
import Clase11 from "./components/Clase11";
import Clase12 from "./components/Clase12";
import Home from "./components/Clase13/Home";
import NotFound from "./components/Clase13/NotFound";
import Clase6 from "./components/Clase6";
import Page from "./components/UI/page";
import Clase14 from "./components/Clase14";

function App() {
  const usuarios = [
    { id: 1, nombre: "Carla", edad: 18, ubicacion: "Bs As" },
    { id: 2, nombre: "Juan", edad: 19, ubicacion: "CBA" },
    { id: 3, nombre: "Jorge", edad: 20, ubicacion: "STA FE" },
  ];

  return (
    <Page>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Clase12" element={<Clase12 />} />
        <Route path="/Clase11" element={<Clase11 />} />
        <Route path="/Clase14" element={<Clase14 />} />
        <Route path="/Clase6" element={<Clase6 />} />
        <Route path="*" element={<NotFound to="/404" replace />} />
      </Routes>
    </Page>
  );
}

export default App;
