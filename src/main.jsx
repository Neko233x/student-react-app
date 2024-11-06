import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./router.jsx";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom/client";

// const htmlContainer = document.getElementById("root");
// const root = ReactDOM.createRoot(htmlContainer);

// root.render(<h1>Hello World!</h1>)
