import {
    createBrowserRouter,
    RouteObject,
} from "react-router-dom";
import {Customers} from "@/pages/customers.tsx";
import {MainLayout} from "@/layouts/MainLayout";
import {AuthLayout} from "@/layouts/AuthLayout";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <Customers/> },
            { path: "/customers", element: <Customers/> },
            { path: "/about", element: <div>About</div> },
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            // Add your auth routes here
        ]
    },
];

export const Router = createBrowserRouter(routes, {
    basename: "/",
    window,
});