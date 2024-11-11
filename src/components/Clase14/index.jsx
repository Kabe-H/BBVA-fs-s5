import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../Redux/Slice/userSlice";
import { useNavigate } from "react-router-dom";
import { setCounter } from "../../Redux/Slice/countSlice";

export default function Clase14() {
  const [nombre, setNombre] = useState();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const count = useSelector((state) => state.count);
  const navigate = useNavigate();

  const onClick = () => {
    dispatch(setUser({ ...user, nombre: nombre }));
  };

  const onClickCount = () => {
    dispatch(setCounter(count + 1));
  };

  const onClickCountRes = () => {
    dispatch(setCounter(count - 1));
  };

  return (
    <div>
      {count}
      <TextField
        label="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <Button onClick={onClick} variant="contained">
        Setear en redux
      </Button>
      <Button onClick={onClickCountRes} variant="contained">
        restar uno
      </Button>
      <Button onClick={onClickCount} variant="contained">
        sumar uno
      </Button>
      <Button onClick={() => navigate("/Clase6")} variant="contained">
        ir a la clase 6
      </Button>
    </div>
  );
}
