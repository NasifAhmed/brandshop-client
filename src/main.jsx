import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Router from "./routes/Router";

import { RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={Router} />
        </AuthProvider>
    </React.StrictMode>
);
