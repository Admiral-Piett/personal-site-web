import React from "react";
import ReactDOM from "react-dom/client";
import emailjs from "@emailjs/browser";

import AppRouter from "./router/AppRouter";
import { emailPubKey } from "./config";

import "./styles/index.css";
import "./styles/cocktails.css";

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

emailjs.init(emailPubKey);

const app = (
  <div>
    <AppRouter />
  </div>
);

root.render(app);
