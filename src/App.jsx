import "./App.css";
import Clase10 from "./components/Clase10";
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
      <h2>fs-w5</h2>
      <Clase2 />
      <Clase3 />
      <Clase5 />
      <Clase6 />
      <Clase7 />
      <Clase8 />
      <Clase9 />
      <GenerarTarea />
      {usuarios.map((usuario) => (
        <Clase10 key={usuario.id} user={usuario} />
      ))}
    </Page>
  );
}

export default App;
