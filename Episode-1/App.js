{
  /* <div id="parent">
      <div id="child1">
          <h1> Welcome to nested react!</h1>
          <h2> Welcome to nested react!</h2>
      </div>
      <div id="child2">
          <h1> Welcome to nested react!</h1>
          <h2> Welcome to nested react!</h2>
      </div>
</div>; */
}

// const element = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Welcome to the nested react party!"),
//     React.createElement("h2", {}, "Welcome to the nested react party!"),
//   ]) // if we want to create two elements that are sibling of each other then put it in array
// );

// make more nested elements makes react looks more complex- Solution: JSX
const element = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", {}, "Welcome to the nested react party!"),
      React.createElement("h2", {}, "Welcome to the nested react party!"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "Welcome to the nested react party!"),
      React.createElement("h2", {}, "Welcome to the nested react party!"),
    ]),
  ] // if we want to create two elements that are sibling of each other then put it in array
);

// const element = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Welcome to the React Party"
// );
console.log(element);
// h1 is not h1 element it is an react element(object).
// it contains props which contains attributes-id and child-"Welcome to the React Party" of h1 object.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
// take the react element object and create h1 tag put inside the root(that is div)
// How render conversts?   ReactElements(objects) --> HTML (Broswer can understand)

//! just one scenario if in html file under div id=root there already h1 element contains Hi kamal then waht happens
// Eg: <div id="root">
//   <h1>Hi Kamal</h1>
// </div>; this HI kamal will replaced by the parent(passing from react element)
