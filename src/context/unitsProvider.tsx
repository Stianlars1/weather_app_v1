import { ReactNode } from "react";
import { UnitsContext } from "./unitsContext.tsx";
import { useLocalStorageUnits } from "./hooks/useLocalStorageUnits.tsx";

export const UnitsProvider = ({ children }: { children: ReactNode }) => {
  const { localUnits, setLocalUnits } = useLocalStorageUnits();
  const toggleUnitsChange = () => {
    const newUnits = localUnits === "metric" ? "imperial" : "metric";
    setLocalUnits(newUnits);
  };

  return (
    <UnitsContext.Provider value={{ units: localUnits, toggleUnitsChange }}>
      {children}
    </UnitsContext.Provider>
  );
};
