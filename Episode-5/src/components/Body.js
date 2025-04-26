import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // State variable - Super powerful variable
  // How to create that super powerful variable? - solution: React Hoooks (useState)
  // why it is called state variable? - It maintains the state of the conponent
  //! when we call the useState() it will return the state variable. we have to recieve it inside an array
  //!The super powerful variable keeps UI sync with data varaible and this is called Render. how? - solution: whenever the state variable updates, React will re-render the components.
  // Whatever we pass inside useState([]) is become default value to array variable (here ListOfRestaurants )
  // How to use useState retruning state variabe (here [ListOfRestaurants] ), we can use it as normal variable like ListOfRestaurants.
  //! How to modify that variable(ListOfRestaurants) since it is array. We cant modify like normal array. Since it is state variable returned by useState() we should modify it using function. that funciton comes as second parameter in that array (here setListOfRestaurants)
  // setListOf Restaurants used to update the listOfRestaurants
  let [ListOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // way to update the setListOfRestaurant is to call the function and pass the new data to push into it.
            // Filter Logic here(where rating of restaurants is higher)
            const filteredList = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestaurants(filteredList); // We are updating(filtering high rated hotels) ListofRestaurants using setListOfRestaurants function with help of passing filteredList(after we filtered).
            //console.log(ListOfRestaurants); // Data is filtered but UI is not updated without using hook usestate() we can simply check it by clg.
          }}
        >
          Top Rated Button
        </button>
      </div>
      <div className="res-container">
        {/* // Why separate component for card? we have to make our code modular, means there is lot of cards in this project so we have to create separate card component */}
        {/* ! Component is basically funciton, we use function while we have to do repitation task like same if there is repitation is code we have to use separate component */}
        {
          ListOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            //!OPTIMIZATION - Map should alwasy have a "key" why? When components are in same level we looping it need to have unique id becasue if there are 15 cards and 1 new restraurant card came in React doesnt know where to position that card so it will re-render all 15 cards again.
          )) // we are looping for each restaurant we are returning the RestaurantCard
        }
        {/* //! not using keys(not acceptable) < index as key < unique id (best pracctise) */}
        {/* {
            resList.map((restaurant,index) => (
              <RestaurantCard key={restaurant.index} resData={restaurant} />
            ))//! In React its not recommended to use index as the key.
            index is just the position of the item (like 0,1,2,3).
            If the list changes (adding, deleting, sorting items), the index values also change.
            React gets confused which item changed because the key also changes.
            Then React re-renders unnecessary items → making app slow and buggy.
          } */}

        {/* <RestaurantCard
            resData={resList[0]} // js object should pass inside {}
          /> */}
        {/* // Its better to use map method to avoid repition of RestaurantCard again and again for multiple cards */}
        {/* // Here resName and cuisine are the props we passing to component(RestaurantCard). React will take all the props and wrap it inisde as pass to RestaurantCard component as props. */}
        {/* //! But the problem is when we repeat the compnent we get the same structure but how we get the data dynamically updated for each card? - Solution: Porps. Props means properties. Properites is something we can pass into components */}
        {/* Props are just normal arguments to the function. Passing a prop to component means passing arguments to the function. */}
      </div>
    </div>
  );
};

export default Body;
