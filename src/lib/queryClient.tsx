import { QueryClient as QC, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { TEN_MINUTES } from "../utils/constants.ts";

export const QueryClient = ({ children }: { children: ReactNode }) => {
  const queryClient = new QC({
    defaultOptions: { queries: { staleTime: TEN_MINUTES } }, // Keep cache for 10 minutes
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
