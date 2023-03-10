import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./SavedItems.module.scss";
import SavedItem from "./SavedItem";
import { AuthContext } from "../context/authContext";
import { fetchSavedItems } from "../store/cartActions";
import { sendSavedItems } from "../store/cartActions";

function SavedItems() {
  const { savedItems } = useSelector((state) => state.cart);
  const { userDetails } = useContext(AuthContext);
  const dispatch = useDispatch();
  // console.log(savedItems);

  return (
    <div>
      {savedItems && savedItems.length <= 0 ? (
        <p className={classes.empty}>No item saved</p>
      ) : (
        <ul className={classes["saved-items"]}>
          {savedItems?.map((item) => (
            <SavedItem
              key={item.id}
              title={item.title}
              id={item.id}
              image={item.image}
              discount={item.discount}
              price={item.price}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default SavedItems;
