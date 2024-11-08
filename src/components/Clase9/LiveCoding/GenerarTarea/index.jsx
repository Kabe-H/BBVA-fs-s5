import { createContext, useMemo } from "react";
import ListaTarea from "../ListaTarea";
import ContadorTarea from "../ContadorTarea";

export const contextoListaTarea = createContext();

export default function GenerarTarea() {
  const tareas = useMemo(() => [
    { id: 1, tarea: "T1" },
    { id: 2, tarea: "T2" },
    { id: 3, tarea: "T3" },
  ]);


  return (
    <contextoListaTarea.Provider value={tareas}>
      <ListaTarea />
      <ContadorTarea/>
    </contextoListaTarea.Provider>
  );
}
