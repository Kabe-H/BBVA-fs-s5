import React from "react";

export default function Clase3() {
  const lista = [
    { id: 1, nombre: "Prueba 1" },
    { id: 2, nombre: "Prueba 2" },
    { id: 3, nombre: "Prueba 3" },
    { id: 4, nombre: "Prueba 4" },
  ];
  return (
    <ul>
      {lista.map((dato, index) => (
        <li key={index+dato.nombre}>{dato.nombre}</li>
      ))}
    </ul>
  );
}
