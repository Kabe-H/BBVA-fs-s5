import React from "react";

export default function ComponenteA({ onEventoA }) {
  const onClick = () => {
    onEventoA("Hola desde A");
  };
  return <button onClick={onClick}>ComponenteA</button>;
}
