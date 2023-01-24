import { mainRoute, projectRoutes } from "@data/routes";
import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([mainRoute,...projectRoutes as RouteObject[]]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
};