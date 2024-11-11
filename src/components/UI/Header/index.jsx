import React from "react";
import Grid from "@mui/material/Grid2";
import { Button, Typography, IconButton } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";

export default function Header() {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#1a3155",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item size={1} sx={{ border: "1px solid white" }}>
        <Typography sx={{ color: "white" }}>Titulo</Typography>
      </Grid>
      <Grid item size={1} sx={{ border: "1px solid white" }}>
        <Button>Home</Button>
      </Grid>
      <Grid item size={1} sx={{ border: "1px solid white" }}>
        <Button>Polizas</Button>
      </Grid>
      <Grid item size={1} sx={{ border: "1px solid white" }}>
        <Button>Crear Poliza</Button>
      </Grid>
      <Grid item size={5} sx={{ border: "1px solid white" }}>
        <IconButton>
          <AcUnitIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}
