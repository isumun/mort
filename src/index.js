import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MyRoute from "./routes/MyRoute";
import MortalContext from "./context/MortalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <MortalContext>
        <BrowserRouter>
            <MyRoute />
            <App />
        </BrowserRouter>
    </MortalContext>
);
