import { useState } from "react";
import ItemList from "./ItemList";

//! this is RestaurantCategory is "controlled component" because it geting controlled by its parent.(the state showItes coming from Restaurantmenu)
//! If incase RestaurantCategory have useState in it then it "uncontrolled component"
const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  // We have to create the state variable in the data layer
  // const [showItems, setShowItems] = useState(false); we dont want  RestaurantCategory have its own state it should take from RestaurantMenu
  const handleClick = () => {
    //setShowItems(!showItems); // toggle feature
    // If i click then i have to change the state variable of the parent. (showIndex of RestaurantMenu from RestaurantCategory). So pass the state variable first
    setShowIndex();
  };
  //console.log("Accordian Data", data);
  return (
    <div>
      {/* Header */}
      <div className="w-1/2 bg-gray-100 shadow-lg p-4 m-auto my-10">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* //ItemList is in UI Layer */}
        {/* // if my showitems is true then only show my itemslist */}
        {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
