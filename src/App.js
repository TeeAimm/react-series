import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About"
import Contact from "./Components/Contact";
import Error from "./Components/Error";
//import Cart from "./Components/Cart";
import RestaurantMenu from "./Components/RestaurantMenu";
import Shimmer from "./Components/Shimmer";
import UserContext from "./utils/UserContext";

const Cart = lazy(() => import("./Components/Cart"))

const AppLayout = () => {
    const [user, setUser] = useState()
    // Authentication 
    useEffect(() => {
        // Call auth API, send user name and password and get response
        const res = { name: 'Tania Mollah', status: 'Prime', city: 'Howrah', loggedIn: true }
        setUser(res.name)
    }, [])

    return (
        <UserContext.Provider value={{name: user}}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/cart',
                element: <Suspense fallback={<h1 className="mx-5 font-semibold text-lg">Loading...</h1>}><Cart /></Suspense>
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    },

])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
