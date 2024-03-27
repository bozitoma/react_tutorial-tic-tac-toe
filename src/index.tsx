import React, { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import "./styles.css";

import App from "./App";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
