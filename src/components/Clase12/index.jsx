import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";

export default function Clase12() {
  const [datosFetch, setDatosFetch] = useState([]);
  const [datosAxios, setDatosAxios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  useEffect(() => {
    fetchDatos();
    fetchDatosAxios();
  }, []);

  const fetchDatos = () => {
    setCargando(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((respuesta) => setDatosFetch(respuesta))
      .catch((e) => console.log(e))
      .finally(() => setCargando(false));
  };

  const fetchDatosAxios = () => {
    setCargando(true);
    axios
      .get("https://swapi.dev/api/people")
      .then((response) => {
        console.log(response);
        setDatosAxios(response.data.results);
      })
      .catch((e) => console.log(e))
      .finally(() => setCargando(false));
  };

  if (cargando) {
    return <Typography>CARGANDO...</Typography>;
  }

  if (loading) {
    return <Typography>CARGANDOx...</Typography>;
  }

  return (
    <div>
      <Typography variant="h4">DATOS CON FETCH</Typography>
      {datosFetch?.slice(0, 5).map((dato) => (
        <div key={dato.id}>
          <Typography>{dato.title}</Typography>
          <Typography>{dato.body}</Typography>
        </div>
      ))}
      <Typography variant="h4">DATOS CON AXIOS</Typography>
      {datosAxios?.slice(0, 5).map((dato) => (
        <div key={dato.id}>
          <Typography>{dato.name}</Typography>
          <Typography>{dato.height}</Typography>
        </div>
      ))}
      <Typography variant="h4">DATOS CON MI CUSTOM HOOK</Typography>
      {data?.slice(0, 5).map((dato) => (
        <div key={dato.id}>
          <Typography>{dato.name}</Typography>
          <Typography>{dato.height}</Typography>
        </div>
      ))}
    </div>
  );
}
