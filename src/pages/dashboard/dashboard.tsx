import { Header } from "../../components/layout/header/header.tsx";
import { LocationList } from "./components/locationList/locationList.tsx";

export const DashboardPage = () => {
  return (
    <>
      <Header headerTitle={"Dashboard"} />

      <main>
        <LocationList />
      </main>
    </>
  );
};
