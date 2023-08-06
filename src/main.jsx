import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Notifications position="top-right" zIndex={2077}/>
      <App />
    </MantineProvider>
);
