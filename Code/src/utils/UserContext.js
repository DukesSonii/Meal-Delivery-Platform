import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default User",
});

export default UserContext;

//by using useContext i can access this anuywhere from my app
