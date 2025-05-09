import { useEffect, useState } from "react";
import React from "react";
//const User = ({name}) => { // here we destructuring the props that coming
const User = (props) => {
  // creating two state variable in functional component.
  const [count, setCount] = useState(0); // setCount to update the state variable "count"
  const [count2] = useState(1);

  // To make an API call we need useEffect
  // why? -- to quick render before API call
  // In react, use 2nd approach Loads -> Render(Shimmer) -> API calls -> Re-render
  useEffect(() => {
    // this wil be called after one inital render
    // API call
  }, []);
  // if we dont put dependency array this useEffect will be called after every render

  // How to call API in funcitonal component? - using async functions
  // async function getUserInfo () {
  // }

  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h2>Count2: {count2}</h2>
      <h2>Name: {props.name}</h2>
      <h3>Location: Lubbock</h3>
      <h4>Contact: @kamal</h4>
    </div>
  );
};

export default User;
