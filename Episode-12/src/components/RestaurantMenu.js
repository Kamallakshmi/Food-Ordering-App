import React from "react";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  //const [resInfo, setresInfo] = useState(null);

  // Just to show props drilling concept im using dummy variable
  const dummy = "Dummy Data";

  const { resId } = useParams();
  // useParams is the builtin funtion that will return resID for each restaurant.
  //! Why custom hooks?
  // Earlier we have fetching data logic inside RestaurantMenu component. Now using custom hook (useRestaurantMenu()) we fetch the data separately we create a separate component on utils folder.
  const resInfo = useRestaurantMenu(resId);
  //console.log("Restaurant id", resInfo);
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

  //if showIndex is 1 first accordion will open then all remaining accordion will closed. by default the index 0 is open
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const menuCards =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  //console.log(resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const itemSection = menuCards?.filter(
    (card) =>
      card.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  ); // instead of "@type" we should write like ["@type"], because of the name start with @ we cant write like card?.@type it throws error
  console.log(itemSection);

  //const itemSection = menuCards?.find((card) => card.card?.card?.itemCards);

  //const itemCards = itemSection?.card?.card?.itemCards;
  // console.log("Menu items list", itemSection?.card?.card?.itemCards);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {costForTwoMessage}
          </li>
        ))}
      </ul> */}
      {/* <li>{itemCards[0].card.info.name}</li>
        <li>{itemCards[1].card.info.name}</li>
        <li>{itemCards[2].card.info.name}</li> */}

      {/* Categories Accordian */}
      {itemSection?.map((section, index) => (
        // Controlled Component
        <RestaurantCategory
          key={section.card.card.title || index}
          data={section.card.card}
          // we are passing input to RestaurantCategory(child of RestaurantMenu). We are controlling RestaurantCategory by RestaurantMenu(parent control its children). Why we are doing this? if anyof accordion clicked the other opended accordion shoul close automatically
          showItems={index === showIndex ? true : false}
          setShowIndex={() =>
            setShowIndex((prevIndex) => (prevIndex === index ? null : index))
          } // here we passing the state variable of parent to children
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
