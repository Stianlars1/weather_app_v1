import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { Router } from "./components/router/router.tsx";
import { QueryClient } from "./components/queryClient/queryClient.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClient>
      <Router />
    </QueryClient>
  </StrictMode>,
);
