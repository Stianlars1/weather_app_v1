import { LocationType } from "../../types/location.ts";
import { WeatherCard } from "../weatherCard/weatherCard.tsx";
import styles from "./locationList.module.css";
import { defaultLocations } from "./helper.ts";
import { useCurrentLocation } from "./hooks/useCurrentLocation.tsx";

export const LocationList = () => {
  const { userLocation } = useCurrentLocation();

  const locations = [userLocation, ...defaultLocations].filter(
    Boolean,
  ) as LocationType[];

  return (
    <>
      <ul className={styles.locationList}>
        {locations.map((location) => (
          <WeatherCard
            units={"metric"}
            key={location.name}
            location={location}
          />
        ))}
      </ul>
    </>
  );
};
