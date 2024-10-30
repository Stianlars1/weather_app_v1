import { QueryClient as QC, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

export const QueryClient = ({ children }: { children: ReactNode }) => {
  const queryClient = new QC({
    defaultOptions: { queries: { staleTime: 1000 * 60 * 10 } }, // Keep cache for 10 minutes
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
