import React from "react";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  //const [resInfo, setresInfo] = useState(null);

  const { resId } = useParams();
  // useParams is the builtin funtion that will return resID for each restaurant.
  //! Why custom hooks?
  // Earlier we have fetching data logic inside RestaurantMenu component. Now using custom hook (useRestaurantMenu()) we fetch the data separately we create a separate component on utils folder.
  const resInfo = useRestaurantMenu(resId);
  // this useRestaurantMenu() is custom hook - it will fetch the data and give it to RestaurantMenu
  // we are passing the resId to useRestaurantMenu(custom hook)
  // create a separate file for separate custom hook

  // useEffect(() => {
  //   fetchMenu();
  // }, []); // if there is no optional argument(dependency array), then useEffect will called evrytime when this restaurantMenu component rendered thats foolish. We have to call once on initial render

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);
  //   const json = await data.json();
  //   setresInfo(json.data);
  // };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const menuCards =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const itemSection = menuCards?.find((card) => card.card?.card?.itemCards);

  const itemCards = itemSection?.card?.card?.itemCards;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {costForTwoMessage}
          </li>
        ))}
        {/* <li>{itemCards[0].card.info.name}</li>
        <li>{itemCards[1].card.info.name}</li>
        <li>{itemCards[2].card.info.name}</li> */}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
