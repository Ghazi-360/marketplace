import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Marketplace Home Page
import LandingPage from "./Screens/LandingPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />
    },
])

const RootComponent = () => {
    return <RouterProvider router={router} />;
}

export default RootComponent;