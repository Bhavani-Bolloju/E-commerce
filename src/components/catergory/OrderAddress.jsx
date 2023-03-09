import React, { useContext } from "react";
import classes from "./OrderAddress.module.scss";
import { addAddress } from "../firebase/service";
import { AuthContext } from "../context/authContext";

function OrderAddress() {
  const { userDetails } = useContext(AuthContext);
  const submitFormHandler = async function (e) {
    e.preventDefault();
    const { streetaddress, city, pincode, state } = e.target.elements;
    // console.log(streetaddress.value, city.value, pincode.value, state.value);
    await addAddress(userDetails.docId, {
      street: streetaddress.value,
      city: city.value,
      pincode: pincode.value,
      state: state.value,
    });

    e.target.reset();
  };

  return (
    <div className={classes["address"]}>
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
  );
}

export default OrderAddress;
