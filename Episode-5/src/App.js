import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

//const RestaurantCard = ({resaName, cuisine}) => this is also fine. we are destructuring our props.

//AppLayout is the funciton component that is the function returns a JSX
const AppLayout = () => {
  return (
    // Everything inside the div is good practice
    <div className="app">
      {/* // Component Composition */}
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")); // for displaying in the browser we have to use ReactDOM.

root.render(<AppLayout />);
