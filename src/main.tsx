import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// main container app
import App from "./App.tsx";
// bootstrap css minified
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
