import { RouteObject } from "react-router-dom"
import HexColor from "@pages/HexColor/main"
import Home from "@pages/Home"
import Points from "@pages/Points/main";

const assetsPath = "/assets/"
export const projectRoutes: Project[] = [
    {
        name: "random color generator",
        path: "randomColor",
        element: <HexColor />,
        imgPath: "random_color.png",
    },
    {
        name:"points",
        path: "points",
        element: <Points />,
        imgPath: "points.png"
    },
];

interface Project {
    name: string,
    element: JSX.Element,
    path: string,
    imgPath: string
}
export const mainRoute: RouteObject = {
    path: "/",
    element: <Home />,
    errorElement: <h1>Projeto não encontrado</ h1 >
};