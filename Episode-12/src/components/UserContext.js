// This component is to keep the user data
import { createContext } from "react";
const UserContext = createContext({
  loggedInUser: "Default User",
});

export default UserContext;

//! Now we can access this userContext anywhere in the app. this is called React Context to avoid props drilling
