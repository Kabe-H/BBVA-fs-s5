import React from "react";

export default function ComponenteHijo(props) {
  return (
    <>
      <h5>{props.nombre}</h5>
      <p>{props.precio}</p>
    </>
  );
}
