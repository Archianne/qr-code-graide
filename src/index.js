import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QRPage from "./components/QRPage";
import { NavBar } from "./components/NavBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:url" element={<QRPage />} exact />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
