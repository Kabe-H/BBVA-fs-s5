import { useSelector } from "react-redux";
import ComponenteB from "./ComponenteB";
import { Typography } from "@mui/material";

export default function Clase6() {
  const user = useSelector((state) => state.user);

  return (
    <>
      <Typography>{user.nombre}</Typography>
      <ComponenteB />
      <input type="text" onChange={(e) => console.log(e.target.value)} />
      <button onClick={() => console.log("hiciste click")}>Click</button>
    </>
  );
}
