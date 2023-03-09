import React from "react";
import classes from "./OrderAddress.module.scss";

function OrderAddress() {
  const submitFormHandler = function (e) {
    e.preventDefault();
  };

  return (
    <div className={classes["address"]}>
      <h3>Enter Delivery Address</h3>
      <form onSubmit={submitFormHandler}>
        <div className={classes["form-group"]}>
          <label htmlFor="">Street address</label>
          <input required type="text" />
        </div>
        <div className={classes["form-group"]}>
          <label htmlFor="">City</label>
          <input required type="text" />
        </div>

        <div className={classes["form-group-1"]}>
          <div className={classes["form"]}>
            <label htmlFor="">state</label>
            <input required type="text" />
          </div>

          <div className={classes["form"]}>
            <label htmlFor="">pincode</label>
            <input required type="number" />
          </div>
        </div>
        <div className={classes["form"]}>
          <input required type="checkbox" />
          <label htmlFor="">Agree to the terms and conditions</label>
        </div>
        <button>submit</button>
      </form>
    </div>
  );
}

export default OrderAddress;
