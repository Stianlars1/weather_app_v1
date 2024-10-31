import styles from "./weatherDetails.module.css";
import { useWeatherDetailsTitle } from "./hooks/useWeatherDetailsTitle.tsx";
import { Navigate, useLocation } from "react-router-dom";
import {
  OPEN_WEATHER_ICON_FORMAT,
  OPEN_WEATHER_ICON_URL,
  ROOT_PATH,
} from "../../utils/urls.ts";
import { WeatherData } from "../dashboard/types/weather.ts";
import { Header } from "../../components/layout/header/header.tsx";

export const WeatherDetailsPage = () => {
  const headerTitle = useWeatherDetailsTitle();
  const { state } = useLocation();
  const shouldRedirect = !state || !("currentTemp" in state);
  if (shouldRedirect) {
    // Cache is empty, or a refresh deleted current state data from react-router.
    // Redirect to the root page
    return <Navigate to={ROOT_PATH} />;
  }
  const weatherData = state as WeatherData;
  return (
    <>
      <Header backButton={true} headerTitle={headerTitle || "Details page"} />
      <main className={styles.weatherDetailsPage}>
        <img
          src={`${OPEN_WEATHER_ICON_URL}/${weatherData.icon}${OPEN_WEATHER_ICON_FORMAT}`}
          aria-hidden={true}
          className={styles.weatherImage}
          fetchPriority={"high"}
          width={75}
          height={75}
          alt={"Weather preview icon"}
        />
        <div className={styles.detailsWrapper}>
          <BasicWeatherDetails weatherData={weatherData} />
          <DetailedWeatherDetails weatherData={weatherData} />
        </div>
      </main>
    </>
  );
};

const BasicWeatherDetails = ({ weatherData }: { weatherData: WeatherData }) => {
  return (
    <section className={styles.basicWeatherDetails}>
      <p className={styles.tempDescription}>{weatherData.description}</p>
      <h2 className={styles.tempTitle}>
        {weatherData.currentTemp} {weatherData.units}
      </h2>
      <div className={styles.tempRangesWrapper}>
        <article className={styles.tempRange}>
          H: {weatherData.highestTemp} {weatherData.units}
        </article>
        <article className={styles.tempRange}>
          L: {weatherData.lowestTemp} {weatherData.units}
        </article>
      </div>
    </section>
  );
};

const DetailedWeatherDetails = ({
  weatherData,
}: {
  weatherData: WeatherData;
}) => {
  return (
    <section className={styles.detailedWeatherDetails}>
      <article className={styles.sunrise}>
        <strong>sunrise</strong>
        {getSunDate(weatherData.sunrise)}
      </article>
      <article className={styles.sunset}>
        <strong>sunset</strong>
        {getSunDate(weatherData.sunset)}
      </article>

      <article className={styles.humidity}>
        <strong>humidity</strong> {weatherData.humidity}
      </article>
      <article className={styles.visibility}>
        <strong>visibility</strong>
        {weatherData.visibility}
      </article>
    </section>
  );
};

const getSunDate = (date: number) => {
  return new Date(date * 1000)
    .toLocaleTimeString()
    .split(":")
    .slice(0, 2)
    .join(":");
};
