import React from "react";
import { createContext, useState } from "react";
import { getUser } from "../firebase/service";

export const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  confirmLogout: false
});

const AuthContextProvider = function (props) {
  const getuser = JSON.parse(localStorage.getItem("user"));
  const getuserdetails = JSON.parse(localStorage.getItem("userdetails"));

  const [user, setUser] = useState(getuser);
  const [userDetails, setUserDetails] = useState(getuserdetails);
  const [logoutNotification, setLogoutNotification] = useState(false);

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
    setLogoutNotification(true);
    localStorage.removeItem("user");
    localStorage.removeItem("userdetails");
  };

  const logoutNotifyHandler = function () {
    setLogoutNotification(false);
  };

  const cntxValue = {
    user,
    userDetails,
    isLoggedIn,
    login: loggedUserHandler,
    logout: logOutHandler,
    confirmLogout: logoutNotification,
    logoutNotifyHandler
  };

  return (
    <AuthContext.Provider value={cntxValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
