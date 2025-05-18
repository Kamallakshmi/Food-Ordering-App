// Functional components at the end is simple Javascript Function
// Class components at the end is simple Javascript Class
import React from "react";
import { json } from "react-router-dom";
class UserClass extends React.Component {
  // this is the way to tell react we are using Class Component
  constructor(props) {
    // whenever class instance is creared this constructor is called and we extracting the props. and we can use this props anywhere in the code with help of super()
    super(props);
    // State is created whenever class is created
    // loading the class component on webpage means creating instanc of that class
    this.state = {
      // state is the big object contains all the state variables
      // count: 0, // initial value
      // count2: 2, // creating two state variable in class component
      userInfo: {
        name: "Dummy", // we have to give initial state
        location: "Default",
      },
    };
    // console.log(this.props.name + "Child Constructor");
  }

  // this will be called when the component already mounted on the web page
  // we should have to make componentDidMount function as async to make API call
  async componentDidMount() {
    // console.log(this.props.name + "Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/kamallakshmi");
    const json = await data.json();

    this.setState({
      // we are update the state variable from deafult to info from API call
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component will Unmount"); // THis  will once component unmount from the page(UI) like when we go to the new page
  }
  // How to update the state variable in class component? -
  render() {
    // console.log(this.props.name + "Child Render");
    // render method retrun JSX later converted to html
    //const { name } = this.props; // destructuring the props.
    // const { count } = this.state;

    const { name, blog, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        {/* <h1>Count: {count}</h1> */}
        {/* <h1>Count: {count2}</h1> */}
        {/* 
        // we are tring to update the state variable 'count' when clicking the button */}
        {/* <button
          onClick={() => {
            // onclick handler takes the callback function, when i click on this button that will uodate the state variable "count"
            // NEVER UPDATE STATE VARIABLE DIRECTLY -  in function component thats why we are using setCount to update state variable "count"
            // React gives access to this.setState(object) this object contains updated value of states variable
            // !this.state.count = this.state.count + 1; // this is wrong way we cant update the state variable directly like puting equal to
            this.setState({
              // count: this.state.count + 1,
           
            });
            // Behind the hood: For example if we have 5 state variables inside this.state but we have put 2 statevariable to update inside this.setState()then those 2 state variables only gets updated. Only updates the state variables passed inside setState
          }}
        >
          Count Increase
        </button> */}
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Website: {blog}</h3>

        <h4>Contact: @kamal</h4>
      </div>
    );
  }
}

export default UserClass;

//! What is the flow?
//? Mounting phase
//    1. Load - UserClass is loaded
//       - Constructor was called
//           - the  state variable was created with default values
//    2. Render happens with default values
//    3. Commit phase
//           - DOM manipulated with dummy data
//           - ComponentDidMount was called
//               - API call was made
//? Updating Phase
//                   - called setState
//                       - updates the state variables
//     4. React triggers re-render once again
//           - Update the DOM with new values
//           - After the DOM updates with updated value, React call componentDidUpdate()

//! EXAMPLE:

//? ---MOUNTING PHASE ----
// Constructor (dummy)
// Render (dummmy)
//     <HTML dummy>
// Component Did Mount
//     <API call>
//     <this.setState>
//           -- setState triggers reconcilation process and updates cycle

//? ---UPDATING PHASE---
// Render (API DATA)
// <HTML API DATA>
// Component Did Update
