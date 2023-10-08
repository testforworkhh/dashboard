import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Button from "../Button/Button";

const PrivateRoute = () => {
    const navigate = useNavigate();

    if (!localStorage.getItem("token")) {
        return (
            <Navigate to={{pathname: "/login"}}/>
        );
    } else
        return <>
            <Button
                text={"Выйти"}
                click={() => (localStorage.removeItem("token"), navigate("/login"))}
                padding={ "7px 15px"}
                width={"200px"}
                margin={"0 0 0 auto"}
            />
            <Outlet/>
        </>;
};
export default PrivateRoute;