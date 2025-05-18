import React, { lazy, Suspense } from "react"; // Suspense is the component so start with capital letter, it is used to handle the lazy loading
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // this will create a routing configuration inside app router.
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
//import Grocery from "./components/Grocery";

// Outlet is the component, whenever there is change in the path this outlt will be filled with children according to thier path.
//const RestaurantCard = ({resaName, cuisine}) => this is also fine. we are destructuring our props.

//? To make our application more smaller, bundle it small, break into smaller chunks
//! Chunking
//! Code Splitting
//! Dynamic Bundling
//! Lazy Loading - Eg: when we are in restaurant page only restaurant page will load it will not load the code for grocery page aslo called ONDEMAND LOADING
// Why we are doing this?  if we do this we dont put load on single bundle, so that request for that one JS file does not become so heavy that it takes lots of time to take into browser(becasue our single bundle size is too large)

const Grocery = lazy(() => import("./components/Grocery")); // lazy comes fromr react packages named export. This line split our single bundle js file into two separate file we can check it by clicking groacery link on header and check network tab you can see two js files now.
// this "import" takes the path of the grocery component

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
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
        //! if we not use suspense, we will get error because when we click gracery it will take some time to fetch the data of grocery. At that particular time, react try to render grocery page but it not not because we use lazy loading for grocery page that stage cause that error. SOLUTION: SUSPENSE
        // We need a placholder called "fallback" to say what should react render during when the code is not availabe(kind of loading screen)
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
