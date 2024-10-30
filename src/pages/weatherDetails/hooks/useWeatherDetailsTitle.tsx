import { useParams } from "react-router-dom";

export const useWeatherDetailsTitle = () => {
  const { location } = useParams();
  return `${location?.charAt(0).toUpperCase()}${location?.slice(1)}`;
};
