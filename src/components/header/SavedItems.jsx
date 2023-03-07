import React from "react";
import { useSelector } from "react-redux";
import classes from "./SavedItems.module.scss";
import SavedItem from "./SavedItem";

function SavedItems() {
  const { savedItems } = useSelector((state) => state.cart);
  console.log(savedItems);

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
