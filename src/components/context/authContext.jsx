import { createContext, useState } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

const AuthContextProvider = function (props) {
  const getToken = JSON.parse(localStorage.getItem("userToken"));
  console.log(getToken);

  const [userToken, setUserToken] = useState(getToken);

  const isLoggedIn = !!userToken;

  const loggedUserHandler = function (token) {
    setUserToken(token);
    localStorage.setItem("userToken", JSON.stringify(token));
  };

  const logOutHandler = function () {
    setUserToken(null);
    localStorage.removeItem("userToken");
  };

  const cntxValue = {
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
