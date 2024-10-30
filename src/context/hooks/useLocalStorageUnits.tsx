import { useEffect, useState } from "react";
import { UnitsType } from "../../pages/dashboard/types/units.ts";

export const useLocalStorageUnits = () => {
  const [localUnits, setInternalUnits] = useState<UnitsType>("metric");
  // get and set
  const getUnits = () => {
    const units = localStorage.getItem("units");
    if (!units) {
      setLocalUnits("metric" as UnitsType);
    }

    if (units === "imperial" || units === "metric") {
      return units as UnitsType;
    }
    return "metric" as UnitsType;
  };
  const setLocalUnits = (units: UnitsType) => {
    localStorage.setItem("units", units);
    setInternalUnits(units);
  };

  useEffect(() => {
    setInternalUnits(getUnits());
  }, []);

  return { localUnits, setLocalUnits };
};
