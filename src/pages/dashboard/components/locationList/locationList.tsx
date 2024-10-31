import { LocationType } from "../../types/location.ts";
import { WeatherCard } from "../weatherCard/weatherCard.tsx";
import styles from "./locationList.module.css";
import { defaultLocations } from "./helper.ts";
import { useCurrentLocation } from "./hooks/useCurrentLocation.tsx";
import { UnitsCheckbox } from "./components/unitsCheckbox/unitsCheckbox.tsx";
import { UnitsContext } from "../../../../context/unitsContext.tsx";
import { useContext } from "react";
import { Spinner } from "../../../../components/ui/spinner/spinner.tsx";

export const LocationList = () => {
  const { userLocation, fetchUserLocation, geoError, isLoadingGeo } =
    useCurrentLocation();

  const { units } = useContext(UnitsContext);
  const locations = [userLocation, ...defaultLocations].filter(
    Boolean,
  ) as LocationType[];

  return (
    <>
      <UnitsCheckbox />

      <ul className={styles.locationList}>
        {!userLocation && (
          <button
            className={`${styles.useMyLocationButton} ${geoError ? styles.myLocationUnavailable : ""}`}
            onClick={fetchUserLocation}
          >
            {isLoadingGeo && <Spinner />}
            {!isLoadingGeo && "Use My Location"}
          </button>
        )}
        {locations.map((location) => (
          <WeatherCard
            units={units}
            key={location.name + units}
            location={location}
          />
        ))}
      </ul>
    </>
  );
};
