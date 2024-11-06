import { useEffect, useState } from "react";

export default function Clase8() {
  const [contador, setContador] = useState(0);
  const [cantidadClick, setCantidadClick] = useState(0);

  useEffect(() => {
    console.log("Hiciste esta cantidad de click:", cantidadClick);
  }, [cantidadClick]);

  return (
    <div>
      <h5>{contador}</h5>
      <button
        onClick={() => {
          setContador(contador + 1);
          setCantidadClick(cantidadClick + 1);
        }}
      >
        Aumentar
      </button>
      <button
        onClick={() => {
          setContador(contador - 1);
          setCantidadClick(cantidadClick + 1);
        }}
      >
        Disminuir
      </button>
    </div>
  );
}
