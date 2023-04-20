import React, { useState, useContext, useRef, useEffect } from "react";
import classes from "./HeaderNav.module.scss";
import { BsCart4 } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { AuthContext } from "../context/authContext";
import Popup from "../../UI/Popup";


function Header() {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);


 const refUser = useRef()


  const { isLoggedIn, logout } = useContext(AuthContext);

  const totalCount = cartItems
    .map((item) => item.qty)
    .reduce((prev, curr) => prev + curr, 0);

  const toggleCartHandler = function () {
    navigate("/cart");
  };

  const userAccountHandler = function () {
    setOpen(prev => !prev);
  };

  return (
    <>
    
    <header className={classes.header}>
      <div className={classes["header-container"]}>
        <h1
          onClick={() => {
            navigate("/");
          }}
        >
          {/* <img src={cart} alt="cart" /> */}
          <span>shop cart</span>
        </h1>
        <div className={classes["header-btns"]}>
          <button className={classes.cart} onClick={toggleCartHandler}>
            <BsCart4 />
            <span>cart</span>
            <span className={classes.badge}>{totalCount}</span>
          </button>
          <div className={classes.user}>
            <button
              className={classes["user_account"]}
              onClick={(e) => {
                e.stopPropagation()
                userAccountHandler()
              }}
              onBlur={(e) => {
                if (open) {
                  window.addEventListener('click', function (e) {
                    //find the closest ul
                    const closestEl = e.target.closest('ul');
    
                    if (!e.target.isEqualNode(refUser.current) && !closestEl) {
                      setOpen(false)
                    }
                    
                  })
                }
              }}
             
            >
              <CiUser /> <span>Account</span>
            </button>
            {open && (
              <ul className={classes["user-auth"]} ref = {refUser}>
              {!isLoggedIn && (
                <li>
                    <button
                      onClick={() => {
                        navigate("/login");
                        // setOpen(false);
                      }}
                    >
                      Signup/login
                    </button>
                </li>
                  )}

                  {isLoggedIn && (
                <li>
                    <button
                      onClick={() => {
                        signOut(auth);
                        logout();
                       
                     
                      }}
                    >
                      Log out
                    </button>
                </li>
                  )}

                <li>Orders</li>
             
              </ul>
            )}
          </div>

          
        </div>
      </div>

      </header>
      
  </>
  );
}

export default Header;
