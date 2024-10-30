import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Header } from "../header";
import "@testing-library/jest-dom";

describe("Header component", () => {
  it("renders correctly with title", () => {
    render(
      <MemoryRouter>
        <Header headerTitle="Dashboard" />
      </MemoryRouter>,
    );
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });

  it("renders back button when backButton prop is true", () => {
    render(
      <MemoryRouter>
        <Header backButton={true} headerTitle="Weather Details Page" />
      </MemoryRouter>,
    );
    expect(screen.getByText("< Back")).toBeInTheDocument();
  });
});
