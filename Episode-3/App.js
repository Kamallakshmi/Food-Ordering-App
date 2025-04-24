import React from "react";
import ReactDOM from "react-dom/client";
// React Element
// React.createElement => Object => HTMLElement(render)
// Line 6 is Creating React element using core react
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React using React"
); // This react element is object when we render this object it will convert to HTML element
//! This type of code is annoying (bad syntax) -- SOLUTION: JSX (JSX is not a part of React)
const title = () => <h1>Funcion call inside inside curly paranthesis</h1>;
// Now Creating React element using JSX
const jsxHeading = <h1 className="head">Namaste React using JSX</h1>;

// React Functional Component
const HeadingComponent1 = () => {
  return <h1>Namaste React Functional Component1</h1>;
};

//!React Function Component as normal function - in normal function we have expliclity return
// const HeadingComponent3 = function () {
//   return (
//     <div id="container">
//       {/*  This is called Component Composition (Component inside Component) */}
//       <h1>
//         Namaste React Functional Component3 as normal function(not arrow
//         function)
//       </h1>
//     </div>
//   );
// };
const variable = "Kamal";
const HeadingComponent2 = () => (
  <div id="container">
    <HeadingComponent1 />
    {/* // <HeadingComponent1></HeadingComponent1> */} // Also write like this.
    {/* // {HeadingComponent1()} Also write like this to call component its basicaly function */}
    {/*  This is called Component Composition (Component inside Component) */}
    <h1>Namaste React Functional Component2</h1>
    <h2>{100 + 200}</h2>
    <h3>{variable}</h3>
    {title()}
    {heading}
    {/* We are inserting React Element(Heading) inside React Component(HeadingComponent2) */}
    {/* //!we can write js inside JSX using curly paranthesis */}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root")); // for displaying in the browser we have to use ReactDOM.

// To render React Elements
root.render(heading); // h1 in HTML code will replaced by heading object(react element) through rendering
root.render(jsxHeading);

// TO render React Componets. When babel sees angular bracket with heading component it get knows this is React Component
root.render(<HeadingComponent2 />);

const Header = () => (
  <div className="header">
    <img className="logo" src="logo.png" alt="Logo" />
    <input type="text" placeholder="Search..." className="search" />
    <img className="user-icon" src="user.png" alt="User" />
  </div>
);
root.render(<Header />);
