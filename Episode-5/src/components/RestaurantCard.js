import { CDN_URL } from "../utils/constants"; // named exports should import like this.

const styleCard = {
  // styleCard is JS Object.  why we creating this? When we apply inline CSS style we have to apply CSS properties to the JS object and we use that JS object(StyleCard) inside JSX with {}
  //! Inline style in JSX is bad practise
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  console.log(props); // this props is nothing but the object that contains keys and values what we passing to the component
  const { resData } = props; // we just destructuing the props.
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  // "?" - means optional chaining
  return (
    // We can only write JS code in JSX inside {} becasue babel knows okay there is JS inside JSX
    // < className="res-card" style={{backgroundColor: "#f0f0f0"}}> Also write js object directly inside JSX put one more extra {}
    <div className="res-card" style={styleCard}>
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
      {/* // To make the card component dynamically fetch the data we should read the prop what we geting. You know props is in form of JS object. so inside JSX we sdhould put js code insie {} */}
      {/* <h3>{props.resName}</h3>
        <h4>{props.cuisine}</h4> */}
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
