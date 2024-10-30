import styles from "./unitsCheckbox.module.css";
import { UnitsType } from "../../../../types/units.ts";
import { useState } from "react";

export const UnitsCheckbox = () => {
  const [units, setUnits] = useState<UnitsType>("metric");
  const handleCheckboxChange = () => {
    setUnits(units === "metric" ? "imperial" : "metric");
  };
  return (
    <section className={styles.unitsWrapper}>
      <label>Use metric units?</label>
      <input
        type="checkbox"
        checked={units === "metric"}
        onChange={handleCheckboxChange}
      />
    </section>
  );
};
