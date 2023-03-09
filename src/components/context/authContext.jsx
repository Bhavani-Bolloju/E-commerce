import { createContext, useState } from "react";
import { getUser } from "../firebase/service";

export const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

const AuthContextProvider = function (props) {
  const getuser = JSON.parse(localStorage.getItem("user"));
  const getuserdetails = JSON.parse(localStorage.getItem("userdetails"));

  const [user, setUser] = useState(getuser);
  const [userDetails, setUserDetails] = useState(getuserdetails);

  const isLoggedIn = !!user;

  const loggedUserHandler = async function (user) {
    setUser(user);
    const userdetails = await getUser(user.uid);
    setUserDetails(userdetails);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("userdetails", JSON.stringify(userdetails));
  };

  const logOutHandler = function () {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("userdetails");
  };

  const cntxValue = {
    user,
    userDetails,
    isLoggedIn,
    login: loggedUserHandler,
    logout: logOutHandler,
  };

  return (
    <AuthContext.Provider value={cntxValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
