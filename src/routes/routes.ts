import { ComponentType } from "react";
import Login from "../pages/Login/Login";

export const routes: {path: string, Component: ComponentType}[] = [
    {path: "/login", Component: Login}
];