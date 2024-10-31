export interface WeatherDTO {
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  visibility: number;
  sys: {
    sunrise: number;
    sunset: number;
  };
  name: string;
}

export interface WeatherData {
  currentTemp: number;
  humidity: number;
  visibility: number;
  sunset: number;
  sunrise: number;
  highestTemp: number;
  lowestTemp: number;
  name: string;
  units: "F" | "°C";
  description: string;
  icon: string;
}
