import { useState } from "react";
import Ejercicio7 from "./Ejercicio7";

export default function Clase7() {
  const [mail, setMail] = useState("");
  const [suscribed, setSuscribed] = useState(false);


  return (
    <>
      {suscribed ? (
        <h2>Gracias por suscribirte {mail}</h2>
      ) : (
        <div>
          <input
            type="text"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <button
            onClick={() => {
                setSuscribed(true);
              setMail("");
            }}
          >
            Suscribite
          </button>
        </div>
      )}
      <Ejercicio7/>
    </>
  );
}
