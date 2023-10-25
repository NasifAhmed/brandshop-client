import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Router from "./routes/Router";

import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={Router} />
    </React.StrictMode>
);
