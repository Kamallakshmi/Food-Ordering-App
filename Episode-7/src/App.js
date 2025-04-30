import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // this will create a routing configuration inside app router.
import RestaurantMenu from "./components/RestaurantMenu";
// Outlet is the component, whenever there is change in the path this outlt will be filled with children according to thier path.
//const RestaurantCard = ({resaName, cuisine}) => this is also fine. we are destructuring our props.

//AppLayout is the funciton component that is the function returns a JSX
const AppLayout = () => {
  return (
    // Everything inside the div is good practice
    <div className="app">
      {/* // Component Composition */}
      <Header />
      <Outlet />
      {/* // this  outlet component replaced by about, contact component according to path */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "restaurants/:resId", //:resId is dynamic it will change according to the id of the restaurant
        element: <RestaurantMenu />,
      },
    ],

    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")); // for displaying in the browser we have to use ReactDOM.

root.render(<RouterProvider router={appRouter} />);
//1. We have imported RouterProvider component from "react-router-dom"
//2.✅ root.render → React's way to display the app.
//3.✅ RouterProvider → Allows routing inside the app.
//4.✅ router={appRouter} → Gives the routes setup (which pages to show for which URL).
