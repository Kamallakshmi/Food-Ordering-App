import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";

//link component work exactly equal to anchor tag

const Header = () => {
  let btnName = "Login";
  // when we have normal local variable "btnName" there is no way for react ot track whether this btnName got updated or not.
  // but after using useState we got state variable btnNameReact, whenevr this variabe change react will re-render the header component by calling setBtnNameReact triggers to re-renders the component
  //! Important question: After click the button login changed to logout. The question is does react refresh/render the whole header component or just button?
  //! Solution: as soon click the button whole header component will rendered/refreshed
  //! Important question: If btnNameReact value gets updated to logout means how its possible when we declare as const?
  //! Solution: it is possible because whats rendering the whole component means calling the function Header again will creates a new variable btnNameReact so Logout value stored in new btnNameReact variable not modifly old btnNameReact variable.
  // Behind the Scenes:  As soon as we call the setBtnNameReact it will render the header component and update value of new variable btnNameReact it will find the diff between older version of header component [older virutal DOM] to newer version of Header component[newer virtual DOM] it find only button element gets updated it will update it to real DOM structue(HTML structure). this whole process is called Reconciliation
  // Eg. Logo wont refreshede only but refreshed. Thats why react is fast.
  // render means component is called for checking any chnage in DOM structure if anything is changed only change that part.

  const [btnNameReact, setBtnNameReact] = useState("Login"); //

  // useContext is the hook that comes from the React and userContext comes from UserContext component
  const { loggedInUser } = useContext(UserContext);
  //console.log(loggedInUser);

  useEffect(() => {
    //fetchData();
  }, [btnNameReact]);
  // If no dependency array, useEffect is called every component rendered.
  // This [] dependency is not mandatory but if this dependancy array is empty [] then changes the behaviour of its render by calling useEffect only in iniital render.
  // If there is something inside the dependency array, then useEffect only be called when the dependency changes(Eg. useEffect called when every time btnNameReact changes)

  const onlineStatus = useOnlineStatus();

  // we can read the redux store using Selector
  // Selector is the hook inside react
  // hook is the normal JS function
  // using useSelector we are subscribing to our store
  // useSelector gives us access to our store but we will tell what portion of store can access(Eg. store.cart.items)
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <img
          className="w-20 object-contain"
          src={LOGO_URL} // LOGO_URL is the JS constant variable contains url link. How to right JS inside JSX? Using {}
        />
      </div>
      <div className="flex items-center gap-8 text-sm font-medium text-gray-700">
        <ul className="flex items-center gap-6">
          <li className="text-green-600 font-semibold">
            Online Status: {onlineStatus ? "Online" : "Offline"}
          </li>
          <li className="hover:text-orange-500 transition">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-orange-500 transition">
            <Link to="/about">About Us</Link>
            {/* // In react to route to other page dont use anchor tag. RSN whole page got refreshed. SOLUTION - We can navigate to new page wihtout reloading the whole page. */}
          </li>
          <li className="hover:text-orange-500 transition">
            <Link to="/contact">Contact Us</Link>
            {/* // This wont reload the whole page. It just changing the component */}
          </li>
          <li className="hover:text-orange-500 transition">
            <Link to="/grocery">Grocery</Link>
            {/* // This wont reload the whole page. It just changing the component */}
          </li>

          {/* // We are going to show how many items are there in cart */}
          <li className="text-gray-900 font-semibold hover:text-orange-500 transition">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
          {/* Basically we are showing why useState() and useEffect() are important. 
          For that we creating a button when we click the button login changed to logout and vice versa
          */}
          <button
            className="px-4 py-1 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
            onClick={() => {
              //btnNameReact = "Logout";//! we cant directly modify the state variable
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
              console.log(btnName); // it will print "logout" in console but it will not update button remains Login in UI  why?
              // When we click button on Ui btnName name gets updated to Logout but UI is not rendered. that why if we check it console after click it shows Logout but UI remains Login
              //! This is the perfect example to ay why useState and useEffect were useful becasue normal js variables(btnName) wont work in such case like where we update UI(DOM) and data simultaneously. We use state Variable(special variable) btnNameReact and function setBtnNameReact to do that
            }}
          >
            {btnNameReact}
          </button>
          <li className="font-semibold text-gray-800">
            <Link to="/cart">{loggedInUser}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
