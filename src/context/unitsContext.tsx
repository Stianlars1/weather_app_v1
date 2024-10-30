import { createContext } from "react";
import { UnitsType } from "../pages/dashboard/types/units.ts";

export interface UnitsContext {
  units: UnitsType;
  toggleUnitsChange: () => void;
}

const initialContext: UnitsContext = {
  units: "metric" as UnitsType,
  toggleUnitsChange: () => {},
};
export const UnitsContext = createContext<UnitsContext>(initialContext);
