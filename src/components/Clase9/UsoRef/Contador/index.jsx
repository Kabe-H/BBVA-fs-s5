import React, { useRef, useState } from "react";

export default function Contador() {
  const [contador, setContador] = useState(0);
  const [prueba, setPrueba] = useState(false);
  const counterRef = useRef(0);

  const incrementar = () => {
    counterRef.current += 1;
    // setContador(contador + 1);
  };

  const reiniciar = () => {
    counterRef.current = 0;
    setContador(counterRef.current);
  };

  console.log(counterRef.current);

  return (
    <div>
      <p>contador: {contador}</p>
      <p>contadorREF: {counterRef.current}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={reiniciar}>Reiniciar</button>
      <button onClick={() => setPrueba(!prueba)}>Reset</button>
    </div>
  );
}
