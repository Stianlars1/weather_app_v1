import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DashboardPage } from "../pages/dashboard/dashboard.tsx";
import { ErrorPage } from "../pages/error/errorPage.tsx";
import { WeatherDetailsPage } from "../pages/weatherDetails/weatherDetails.tsx";

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/:location",
      element: <WeatherDetailsPage />,
      errorElement: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};
