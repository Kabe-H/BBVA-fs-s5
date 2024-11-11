import "./App.css";
import Clase10 from "./components/Clase10";
import Clase11 from "./components/Clase11";
import Clase12 from "./components/Clase12";
import Clase2 from "./components/Clase2";
import Clase3 from "./components/Clase3";
import Clase5 from "./components/Clase5";
import Clase6 from "./components/Clase6";
import Clase7 from "./components/Clase7";
import Clase8 from "./components/Clase8";
import Clase9 from "./components/Clase9";
import GenerarTarea from "./components/Clase9/LiveCoding/GenerarTarea";
import Page from "./components/UI/page";

function App() {
  const usuarios = [
    { id: 1, nombre: "Carla", edad: 18, ubicacion: "Bs As" },
    { id: 2, nombre: "Juan", edad: 19, ubicacion: "CBA" },
    { id: 3, nombre: "Jorge", edad: 20, ubicacion: "STA FE" },
  ];

  return (
    <Page>
     {/* <Clase11/> */}
    <Clase12/>
    </Page>
  );
}

export default App;
