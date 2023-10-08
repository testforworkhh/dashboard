import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import PrivateRoute from "./components/PrivateRouter/PrivateRoute";
import { privateRoutes } from "./routes/privateRoutes";
import { routes } from "./routes/routes";

function App() {
    const location = useLocation();
    const navigate = useNavigate();
    const [auth, setAuth] = useState<boolean>(false);

    useEffect(() => {
        if (localStorage.getItem("token"))
            setAuth(true);
        if (location.pathname === "/")
            navigate("/login")
    }, [location]);
    return (
        <div className="app">
            <div className="container">
                <Routes>
                    {routes.map((Page) =>
                        <Route
                            path={Page.path}
                            element={<Page.Component />}
                            key={Page.path}
                        />
                    )}
                    <Route path={"/dashboard"} element={<PrivateRoute/>}>
                        {auth &&
                            privateRoutes.map((Page) =>
                                <Route
                                    path={Page.path}
                                    element={<Page.Component/>}
                                    key={Page.path}
                                />
                            )
                        }
                    </Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
