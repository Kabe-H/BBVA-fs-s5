import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../Redux/Slice/userSlice";
import { useNavigate } from "react-router-dom";

export default function Clase14() {
  const [nombre, setNombre] = useState();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const onClick = () => {
    dispatch(setUser({ ...user, nombre: nombre }));
  };

  return (
    <div>
      <TextField
        label="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <Button onClick={onClick} variant="contained">
        Setear en redux
      </Button>
      <Button onClick={() => navigate("/Clase6")} variant="contained">
        ir a la clase 6
      </Button>
    </div>
  );
}
