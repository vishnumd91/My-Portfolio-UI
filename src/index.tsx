import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";

import { BrowserRouter as Router } from "react-router-dom";
import { AdminContextProvider } from "./context";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./utils";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <Router>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <AdminContextProvider>
          <App />
        </AdminContextProvider>
      </QueryClientProvider>
    </React.StrictMode>
  </Router>
);
