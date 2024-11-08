import React, { useContext } from "react";
import { userContext } from "..";

export default function UsarContexto() {
  const usuario = useContext(userContext);
  
  return (
    <div>
      {usuario && (
        <p>
          Hola {usuario.name} iniciaste sesion con el mail {usuario.mail}
        </p>
      )}
    </div>
  );
}
