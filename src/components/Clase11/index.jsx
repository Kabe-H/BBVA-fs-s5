import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import TablaPoliza from "./TablaPoliza";
import FormPoliza from "./FormPoliza";

export default function Clase11() {

  return (
   <Grid container spacing={2} sx={{m:2}}>
    <Grid item size={12}><FormPoliza/></Grid>
    <Grid item size={12}><TablaPoliza/></Grid>
   </Grid>
  );
}
