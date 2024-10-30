import { describe, expect, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { WeatherCard } from "../weatherCard.tsx";
import { LocationType } from "../types/location.ts";

const testLocation = { name: "Oslo", lat: 59.91, lon: 10.75 };
const errorLocation = { name: null, lat: undefined, lon: undefined };
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});
const Wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
// Test the Header component rendering
describe("WeatherCard component", () => {
  it("renders loading card", () => {
    render(
      <Wrapper>
        <MemoryRouter>
          <WeatherCard location={testLocation} />
        </MemoryRouter>
      </Wrapper>,
    );
    expect(screen.getByRole("listitem").ariaLabel).toBe("Loading weather data");
  });

  it.skip("renders an error card when failing to fetch weather data", async () => {
    render(
      <Wrapper>
        <MemoryRouter>
          <WeatherCard location={errorLocation as unknown as LocationType} />
        </MemoryRouter>
      </Wrapper>,
    );
    /*await waitFor(() => expect(result.current.isLoading).toBe(false));*/

    await waitFor(() =>
      expect(screen.getByRole("listitem").ariaLabel).toBe(
        "Error loading weather data",
      ),
    );
  });
});
