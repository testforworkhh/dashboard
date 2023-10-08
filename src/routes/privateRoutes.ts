import { ComponentType } from "react";
import Dashboard from "../pages/Dashboard/Dashboard";

export const privateRoutes: {path: string, Component: ComponentType}[] = [
    {path: "/dashboard", Component: Dashboard}
];