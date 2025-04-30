import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // Hook should be called inside the function component.
  // Purpose of Hook - Used for creating local state variable inside the funcitonal component on the higher level on top.
  // Never use a hook state inside the if statement.
  // State variable - Super powerful variable
  // How to create that super powerful variable? - solution: React Hoooks (useState)
  // why it is called state variable? - It maintains the state of the conponent
  //! when we call the useState() it will return the state variable. we have to recieve it inside an array
  //!The super powerful variable keeps UI sync with data varaible and this is called Render. how? - solution: whenever the state variable updates, React will re-render the components.
  // Whatever we pass inside useState([]) is become default value to array variable (here ListOfRestaurants )
  // How to use useState retruning state variabe (here [ListOfRestaurants] ), we can use it as normal variable like ListOfRestaurants.
  //! How to modify that variable(ListOfRestaurants) since it is array. We cant modify like normal array. Since it is state variable returned by useState() we should modify it using function. that funciton comes as second parameter in that array (here setListOfRestaurants)
  // setListOf Restaurants used to update the listOfRestaurants
  //! why we cant use normal local variable instead of state variable for useState()
  // whenwver state variable update, react triggers a reconciliation cycle(re-renders the component)
  let [ListOfRestaurants, setListOfRestaurant] = useState([]);
  let [filteredRestaurant, setFilteredRestaurant] = useState([]);

  // useEffect() is also comes React libraries so we use named imports import {useEffect} from "react"
  // ueEffect()will take two arguments. 1st is callback function and 2nd is dependency array
  // when will the useEffect callback fn is called? it will be called after the component renders. when the renders cycle is finished, the callback function is called
  // Basically i we want to do something after the render of the component we should write inside the useEffect as callback func.
  //! why we use useEffect()? --> Make a API call inside the callback function, because in 2nd approach we have to make api calls after the render the page. so if we put as callback funciton initial page willl  render then api will call to re render
  useEffect(() => {
    fetchData();
  }, []);
  // If no dependency array, useEffect is called every component rendered.
  // This [] dependency is not mandatory but if this dependancy array is empty [] then changes the behaviour of its render by calling useEffect only in iniital render.
  // If there is something inside the dependency array, then useEffect only be called when the dependency changes.

  const [searchText, setSearchText] = useState(""); // intial null string- this is for search bar

  const fetchData = async () => {
    // fetch will return a promise. we have to resolve a promise either using .then catch to hadle error or async/await(better approach)
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=13.0843007&lng=80.2704622&carousel=true&third_party_vendor=1"
    ); // fetch is the super power given by broswer(JS engine have),this fetch() will fecth data from API.
    //https://corsproxy.io/?  -- By add this i make a call to corsproxy then corsproxy make an api call to swiggy so i wont get cors error even wihtout using cors extension
    const json = await data.json(); // convert readable data to json
    //setListOfRestaurants;
    console.log(json); // Our broswer will throw an error says CORS error access denied means our broswer will block the access to fecth api from on eorigin to another origin
    // Solution - to bypass CORS. use chrome extension

    setListOfRestaurant(
      // this setListOfRestaurant will trigger the re-render after the API call
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    ); // this... structure is not good practise. Solution is Optional chaining '?' means First check if the value exists — only then go inside it. Otherwise, it won't give error even if something is undefined or null
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //Conditional rendering -- rendering based on condition
  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          {/* Intailly if we set value = {searchText} whatever we type in textbox the value wont display becuase the initial value of searchtext is we set to null in useState. 
          so we have to update the value of searchText to the value of what we typing in search bar for that 
                - check we are typing -- event handler -- onChange ( if event oocures measn if we type anything we call setSearchText and pass those typing values then it will saved in searchText)
          Next question why your doing this? becasue our ultimate task is to search the restaurant for that we need value of inside text box to collect those values we are doing this.. AMAZINGGG
         //! AMAZING THING whenevr we press any key the whole body component gets re-rendered. Whenevr we change local state variable (here searchText) React will re-render the whole body component{" "}
         React  re-renders the whole component for each key stroke but only the input text box in the orginal DOM manipulation
         //! Learning: DOM Manipulation is very expensive but react is very efficient in DOM manipulation */}
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-button"
            onClick={() => {
              //Filter the restaurant cards and update the UI
              //need search text (get the value of text box then only we search) -- it is stored in the state variable 'searchText'
              console.log(searchText);
              // we have iterate all the restrauant ot find the name of restaurant match name with searchText
              const filteredRestaurant = ListOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // way to update the setListOfRestaurant is to call the function and pass the new data to push into it.
            // Filter Logic here(where rating of restaurants is higher)
            const filteredList = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestaurant(filteredList); // We are updating(filtering high rated hotels) ListofRestaurants using setListOfRestaurants function with help of passing filteredList(after we filtered).
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
          filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
            //!OPTIMIZATION - Map should alwasy have a "key" why? When components are in same level we looping it need to have unique id becasue if there are 15 cards and 1 new restraurant card came in React doesnt know where to position that card so it will re-render all 15 cards again.
          )) // we are looping for each restaurant we are returning the RestaurantCard
          // Always key should be in parent
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
