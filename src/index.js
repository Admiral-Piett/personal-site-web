import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router/AppRouter";

import "./styles/index.css";

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

const app = (
  <div>
    <AppRouter />
  </div>
);

root.render(app);
