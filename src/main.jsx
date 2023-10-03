import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { PokeContextProvider } from "./Context/PokeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PokeContextProvider>
      <App />
    </PokeContextProvider>
  </React.StrictMode>
);
