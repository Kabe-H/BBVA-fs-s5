import { createTheme, ThemeProvider } from "@mui/material";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import store from "./Redux/store.js";

const theme = createTheme({
  textField: {
    defaultProps: {
      variant: "standard",
    },
  },
});
let base = "/BBVA";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={base}>
        <StrictMode>
          <App />
        </StrictMode>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);
