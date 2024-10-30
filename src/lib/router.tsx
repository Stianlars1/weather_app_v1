import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <></>,
      errorElement: <></>,
    },
    {
      path: "/:location",
      element: <></>,
      errorElement: <></>,
    },
  ]);
  return <RouterProvider router={router} />;
};
