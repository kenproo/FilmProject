import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./components/App.js";
import reportWebVitals from "./reportWebVitals";
import Login from "./components/Login.js";
import SignupForm from "./components/SignupForm.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path = "/signup" element = {<SignupForm/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
