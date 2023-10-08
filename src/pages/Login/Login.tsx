import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { LOGIN_QUERY } from "../../query/loginQuery";
import { message } from "antd";

import "./Login.scss";

const Login = () => {
    const [loginValue, setLogin] = useState<string>("UserOne");
    const [password, setPassword] = useState<string>("pass");
    const navigate = useNavigate();

    const [login] = useMutation(LOGIN_QUERY);

    const handleRequest = () => {
        login({
            variables: {
                username: loginValue,
                password: password
            }
        })
            .then(({data}) => {
                if (data?.login?.token) {
                    localStorage.setItem("token", data.login.token);
                    navigate("/dashboard");
                }
            })
            .catch(() => {
                message.error("Error");
            });
    };

    if (localStorage.getItem("token")) {
        setTimeout(() => navigate("/dashboard"), 110);
        return <></>;
    }
    return (
        <div className={"login"}>
            <h1 className="h1">
                Вход
            </h1>
            <h4 className="h4">
                Уникальная технология доступная для вашего бизнеса уже сейчас!
            </h4>
            <Input
                type={"text"}
                value={loginValue}
                setValue={setLogin}
                placeholder={"Логин"}
            />
            <Input
                type={"password"}
                value={password}
                setValue={setPassword}
                placeholder={"Пароль"}
            />
            <Button
                text={"Войти"}
                disabled={!loginValue || !password}
                click={handleRequest}
                padding={"10px 15px"}
            />
        </div>
    );
};

export default Login;