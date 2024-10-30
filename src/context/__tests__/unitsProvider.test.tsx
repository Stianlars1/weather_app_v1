import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { UnitsProvider } from "../unitsProvider";
import { UnitsContext } from "../unitsContext";
import { useContext } from "react";

const TestComponent = () => {
  const { units, toggleUnitsChange } = useContext(UnitsContext);
  return (
    <div>
      <span>{units}</span>
      <button onClick={toggleUnitsChange}>Toggle Units</button>
    </div>
  );
};

describe("UnitsProvider", () => {
  it("provides default units value of metric", async () => {
    render(
      <UnitsProvider>
        <TestComponent />
      </UnitsProvider>,
    );

    // Use findByText to wait for the "metric" text to appear.
    expect(await screen.findByText("metric")).toBeInTheDocument();
  });

  it("toggles the units value when button clicked", async () => {
    render(
      <UnitsProvider>
        <TestComponent />
      </UnitsProvider>,
    );

    const button = screen.getByText("Toggle Units");
    button.click();

    // Wait for the updated text to appear.
    expect(await screen.findByText("imperial")).toBeInTheDocument();
  });
});
