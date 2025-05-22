import { useContext } from "react";
import { CDN_URL } from "../utils/constants"; // named exports should import like this.
import UserContext from "./UserContext";

const styleCard = {
  // styleCard is JS Object.  why we creating this? When we apply inline CSS style we have to apply CSS properties to the JS object and we use that JS object(StyleCard) inside JSX with {}
  //! Inline style in JSX is bad practise
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  //console.log(props); // this props is nothing but the object that contains keys and values what we passing to the component
  const { resData } = props; // we just destructuing the props.

  const { loggedInUser } = useContext(UserContext); // we are using react context without doing prop drilling

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  // "?" - means optional chaining
  return (
    // We can only write JS code in JSX inside {} becasue babel knows okay there is JS inside JSX
    // < className="res-card" style={{backgroundColor: "#f0f0f0"}}> Also write js object directly inside JSX put one more extra {}
    <div
      className="m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-300"
      // style={styleCard}
    >
      <img className="rounded-r-lg" src={CDN_URL + cloudinaryImageId} />
      {/* // To make the card component dynamically fetch the data we should read the prop what we geting. You know props is in form of JS object. so inside JSX we sdhould put js code insie {} */}
      {/* <h3>{props.resName}</h3>
        <h4>{props.cuisine}</h4> */}
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>User : {loggedInUser}</h4>
    </div>
  );
};

//! Higher Order Component
// I/p- RestaurantCard ---> O/p- RestaurantCardDiscount
export const withPromotedLabel = (RestaurantCard) => {
  // Returning a new component, this new component have discount label on top of it. (component is basically a  funciton)
  return (props) => {
    // we have to get the props
    return (
      <div className="relative">
        <label className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
          {props.resData?.info?.aggregatedDiscountInfoV3?.header || "PROMO"}
        </label>
        <RestaurantCard {...props} />
        {/* we have to use spread operator to access all the properties inside the restaurant */}
      </div>
    );
  };
};

export default RestaurantCard;
