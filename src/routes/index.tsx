import {
    createBrowserRouter,
    RouteObject,
} from "react-router-dom";
import {Customers} from "@/pages/customers.tsx";


const routes: RouteObject[] = [
    {
        path: "/",
        element: <Customers/>,
    },
    {
        path: "/customers",
        element: <Customers/>,
    },
    {
        path: "/about",
        element: <div>About</div>,
    },
];

export const Router = createBrowserRouter(routes, {
    basename: "/",
    window,
});
