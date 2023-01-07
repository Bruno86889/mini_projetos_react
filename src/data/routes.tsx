import { RouteObject } from "react-router-dom"
import HexColor from "@pages/HexColor/main"
import Home from "@pages/Home"
import Points from "@pages/Points/main";

export const projectRoutes: RouteObject[] = [
    {
        path: "randomColor",
        element: <HexColor />
    },
    {
        path: "points",
        element: <Points />
    },
];

export const mainRoute: RouteObject = {
    path: "/",
    element: <Home />,
    errorElement: <h1>Projeto não encontrado</ h1 >
};