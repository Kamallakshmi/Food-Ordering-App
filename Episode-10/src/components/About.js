import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import { render } from "react-dom";

// We are going to see how constructor and render function are called
// Life Cycle
// 1. Parent Constructor
// 2. Parent render
// 3. Child Constructor
// 4. Child render
// 5. Child Component Did Mount
// 6. Parent Component Did Mount

class About extends Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }
  // this will execute after child component constructore called, render called and component render is called
  //! ComponentDidMount used to make API call
  //!!! Why API call is made inside componentDidMount? - Like in funcitonal component we use useEffect for quick render before API call, Like that in class Component if we  put API call inside the componentDidMount it will called after child compnent constructor called, child rendered so API call after that only. So that we later only re-render.
  componentDidMount() {
    // console.log("Parent Component Did Mount");
    // API call
  }
  render() {
    // console.log("Parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Kamal's Food App</h2>
        {/* <User name={"Kamal is here(function)"} /> */}
        {/* //Functional Component -  We are passing props over here as 'name' as an argument  */}
        <UserClass name={"Kamal first child"} />
        {/* // Class Component -  */}
        {/* // 2 instance of the same UserClass */}
        {/* <UserClass name={"Raajesh second  child"} /> */}
      </div>
    );
  }
}
//* Flow
// 1. Parent Constructor
// 2. Parent render
//         - Kamal Constructor
//         - Kamal Render
//         - Raajesh Constructor
//         - Raajesh Render
// Batch the commit phase of react life cycle for Optimization
// ?<DOM UPDATED - IN SINGLE BATCH>
//         - Kamal componentDidMount
//         - Raajesh componentDidMount
// 3. Parent componentDidMount

//! why it not flows like
// - Kamal Constructor
// - Kamal Render
// - Kamal componentDidMount
// - Raajesh Constructor
// - Raajesh Render
// - Raajesh componentDidMount
// ! RSN - REACT LIFE CYCLE METHODS
// - when the component is mounted, it is mounted in 2 phases. this will shows why react if fast. Beacuse react has 2 phases such as render and commit phase.
//? 1. Render phase --
// when the component is mounting the constructor is called first and render is called they both comes under Render phase
// Render phase is the reconcilation process: finding the diff between old dom and new updated virtual dom. Basically react triggers the reconcialtion process inside render. So in this render phase everything happen inside the virtual DOM. thats render is fast compare to commit phase.

//? 2. Commit phase -
// Then react updated the DOM - why inside Commit phase. Beasue DOM manipulation is very expensive thing react ( it  takes lots of time ) so we batch it up for all child after all gets initial render
// then only componentDidMount is called thats why we put API Call inside componentDidMount. becuase beofre this step react will update the DOM (Render initially) after componentDidMount is called where we write aPI calls so finally re-renders happens after API calls
// ComponentDidMount (commitphase batch child components)-- This is because of react optimization.
// ! Loads -> Render (Kamal Constructor   -> API Calls (- Kamal componentDidMount      ->  Re-renders
//                   - Kamal Render                     - Raajesh componentDidMount)
//                   - Raajesh Constructor
//                   - Raajesh Render)

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Kamal's Food App</h2>
//       {/* <User name={"Kamal is here(function)"} /> */}
//       {/* //Functional Component -  We are passing props over here as 'name' as an argument  */}
//       <UserClass name={"Kamal is Here(class)"} />
//       {/* // Class Component -  */}
//     </div>
//   );
// };

export default About;
