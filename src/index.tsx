import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import { AdminContextProvider } from "./context";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <AdminContextProvider>
        <App />
      </AdminContextProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
