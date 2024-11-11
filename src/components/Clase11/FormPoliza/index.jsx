import { TextField, Card } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";

export default function FormPoliza() {
  const [datosForm, setDatosForm] = useState({
    codigoPoliza: 0,
    monto: "",
    descripcion: "",
    estado: "",
    fechaEmision: new Date(),
    fechaVencimiento: null,
    cliente: "",
    tipoSeguro: "",
  });
  return (
    <Card sx={{p:2}}>
      <Grid container spacing={2}>
        <Grid item size={{ xs: 12, md: 6, xl: 4 }}>
          <TextField
            fullWidth
            label="Codigo Poliza"
            value={datosForm.codigoPoliza}
            onChange={(e) => {
              setDatosForm({ ...datosForm, codigoPoliza: e.target.value });
            }}
            InputBaseComponentProps ={{maxLength:5}}
          />
        </Grid>
        <Grid item size={{ xs: 12, md: 6, xl: 4 }}>
          <TextField
            fullWidth
            label="Monto"
            value={datosForm.monto}
            onChange={(e) => {
              setDatosForm({ ...datosForm, monto: e.target.value });
            }}
          />
        </Grid>
        <Grid item size={{ xs: 12, md: 6, xl: 4 }}>
          <TextField
            fullWidth
            label="Descripcion"
            value={datosForm.descripcion}
            onChange={(e) => {
              setDatosForm({ ...datosForm, descripcion: e.target.value });
            }}
          />
        </Grid>
        <Grid item size={{ xs: 12, md: 6, xl: 4 }}>
          <TextField
            fullWidth
            label="Estado"
            value={datosForm.estado}
            onChange={(e) => {
              setDatosForm({ ...datosForm, estado: e.target.value });
            }}
          />
        </Grid>
        <Grid item size={{ xs: 12, md: 6, xl: 4 }}>
          <TextField
            fullWidth
            label="Fecha Emision"
            value={datosForm.fechaEmision}
            onChange={() => {
              setDatosForm({ ...datosForm, fechaEmision: e.target.value });
            }}
          />
        </Grid>
        <Grid item size={{ xs: 12, md: 6, xl: 4 }}>
          <TextField
            fullWidth
            label="Fecha Vencimiento"
            value={datosForm.fechaVencimiento}
            onChange={() => {
              setDatosForm({ ...datosForm, fechaVencimiento: e.target.value });
            }}
          />
        </Grid>
        <Grid item size={12}>
          <TextField
            fullWidth
            label="Cliente"
            value={datosForm.cliente}
            onChange={(e) => {
              setDatosForm({ ...datosForm, cliente: e.target.value });
            }}
          />
        </Grid>
      </Grid>
    </Card>
  );
}
