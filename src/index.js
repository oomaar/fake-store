import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import GlobleStyles from "./GlobleStyles";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobleStyles />
    <App />
  </React.StrictMode>
);
