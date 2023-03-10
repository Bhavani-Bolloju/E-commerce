import React, { useContext, useState } from "react";
import classes from "./OrderAddress.module.scss";
import { addAddress } from "../firebase/service";
import { AuthContext } from "../context/authContext";
import { useDispatch } from "react-redux";
import { orderConfirmed } from "../store/cartSlice";
import { sendCartData } from "../store/cartActions";

function OrderAddress() {
  const [confirmOrder, setConfirmOrder] = useState(false);
  const { userDetails } = useContext(AuthContext);
  const dispatch = useDispatch();

  const submitFormHandler = async function (e) {
    e.preventDefault();
    const { streetaddress, city, pincode, state } = e.target.elements;
    await addAddress(userDetails.docId, {
      street: streetaddress.value,
      city: city.value,
      pincode: pincode.value,
      state: state.value,
    });
    e.target.reset();
    setConfirmOrder(true);
    //clear cart
    dispatch(orderConfirmed());
    dispatch(sendCartData(userDetails?.docId, [], 0));
  };

  return (
    <div className={classes["address"]}>
      {!confirmOrder && (
        <div>
          <h3>Enter Delivery Address</h3>
          <form onSubmit={submitFormHandler}>
            <div className={classes["form-group"]}>
              <label htmlFor="streetaddress">Street address</label>
              <input required type="text" name="streetaddress" />
            </div>
            <div className={classes["form-group"]}>
              <label htmlFor="city">City</label>
              <input required type="text" id="city" name="city" />
            </div>

            <div className={classes["form-group-1"]}>
              <div className={classes["form"]}>
                <label htmlFor="state">state</label>
                <input required type="text" id="state" name="state" />
              </div>

              <div className={classes["form"]}>
                <label htmlFor="pincode">pincode</label>
                <input required type="number" id="pincode" name="pincode" />
              </div>
            </div>
            <div className={classes["form"]}>
              <input id="agree" required type="checkbox" />
              <label htmlFor="agree" name="agree">
                Agree to the terms and conditions
              </label>
            </div>
            <button>submit</button>
          </form>
        </div>
      )}
      {confirmOrder && (
        <p className={classes.confirmed}>
          Your order is placed! Thanks for shopping :)
        </p>
      )}
    </div>
  );
}

export default OrderAddress;
