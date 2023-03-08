import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useCallback } from "react";
const useAuth = function () {
  const storedAuthUser = localStorage.getItem("authUser");

  const [user, setUser] = useState(JSON.parse(storedAuthUser));

  // console.log("render", storedAuthUser);

  const getUserAuth = useCallback(function () {
    const auth = getAuth();
    onAuthStateChanged(auth, (authUser) => {
      // console.log(authUser, "authUser");
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        if (!storedAuthUser) {
          setUser(authUser);
        }
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });
  }, []);

  getUserAuth();

  return { user };
};

export default useAuth;
