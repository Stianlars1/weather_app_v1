import { Header } from "../../components/layout/header/header.tsx";
import { LocationList } from "./components/locationList/locationList.tsx";
import { UnitsProvider } from "../../context/unitsProvider.tsx";

export const DashboardPage = () => {
  return (
    <>
      <Header headerTitle={"Dashboard"} />

      <main>
        <UnitsProvider>
          <LocationList />
        </UnitsProvider>
      </main>
    </>
  );
};
