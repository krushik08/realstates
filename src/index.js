import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";

// Put any other imports below so that CSS from your
// components takes precedence over default styles.
// Soft UI Context Provider
import { ArgonControllerProvider } from "context";

// react-perfect-scrollbar component
import PerfectScrollbar from "react-perfect-scrollbar";

// react-perfect-scrollbar styles
import "react-perfect-scrollbar/dist/css/styles.css";

//
import "../src/assets/css/style.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <ArgonControllerProvider>
      <PerfectScrollbar>
        <App />
      </PerfectScrollbar>
    </ArgonControllerProvider>
  </BrowserRouter>
);
