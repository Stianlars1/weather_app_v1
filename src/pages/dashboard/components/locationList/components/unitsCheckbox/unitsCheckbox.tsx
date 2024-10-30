import { useContext } from "react";
import { UnitsContext } from "../../../../../../context/unitsContext.tsx";
import styles from "./unitsCheckbox.module.css";

export const UnitsCheckbox = () => {
  const { units, toggleUnitsChange } = useContext(UnitsContext);
  const handleCheckboxChange = () => {
    toggleUnitsChange();
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
