import { createContext, useState } from "react";
import UsarContexto from "./UsarContexto";
import ListaTarea from "./LiveCoding/ListaTarea";
import Contador from "./UsoRef/Contador";

export const userContext = createContext();

export default function Clase9() {
  const [usuario, setUsuario] = useState(null);

  const cerrrarSesion = () => {
    if (usuario) {
      setUsuario(null);
    } else {
      setUsuario({
        name: "Pedro",
        mail: "mail@prueba.com",
      });
    }
  };
  return (
    <>
      <userContext.Provider value={usuario}>
        <button onClick={cerrrarSesion}>
          {usuario ? "Cerrar Sesion" : "Iniciar Sesion"}
        </button>
        <UsarContexto />
      </userContext.Provider>

      <ListaTarea />
      <Contador/>
    </>
  );
}
