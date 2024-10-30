import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DashboardPage } from "../pages/dashboard/dashboard.tsx";
import { ErrorPage } from "../pages/error/errorPage.tsx";

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage />,
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: "/:location",
      element: <></>,
      errorElement: <ErrorPage></ErrorPage>,
    },
  ]);
  return <RouterProvider router={router} />;
};
