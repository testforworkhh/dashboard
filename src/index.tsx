import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ApolloClient, InMemoryCache,HttpLink, ApolloLink,concat, ApolloProvider } from "@apollo/client";
import "./index.scss";

const httpLink = new HttpLink({ uri: "https://graphql-demo.dev.aicall.ru/graphql" });
const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext(() => ({
        headers: {
            authorization: localStorage.getItem("token") || null
        }
    }));

    return forward(operation);
});
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: concat(authMiddleware, httpLink)
});

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    </BrowserRouter>
);


