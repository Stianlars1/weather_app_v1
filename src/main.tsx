import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { Router } from "./lib/router.tsx";
import { QueryClient } from "./lib/queryClient.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClient>
      <Router />
    </QueryClient>
  </StrictMode>,
);
