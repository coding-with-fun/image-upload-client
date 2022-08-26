import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ImageProvider } from "./contexts/ImageContext";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ImageProvider>
            <App />
        </ImageProvider>
    </React.StrictMode>
);
