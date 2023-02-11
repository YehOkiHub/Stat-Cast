import React from "react";
import ReactDOM from "react-dom";
import css from "./css/App.css";
import Home from "./../src/components/Home";
import Stats from "./../src/components/Stats";

import {createBrowserRouter, RouterProvider} from "react-router-dom";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    }, 
    {
        path: "/stats",
        element: <Stats/>

    }
])
ReactDOM.render(<RouterProvider router={routes}/>, document.getElementById("root"));