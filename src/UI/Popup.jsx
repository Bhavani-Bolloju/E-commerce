import React from "react";
import classes from "./Popup.module.scss";
import { IoMdClose } from "react-icons/io";

function Popup(props) {
  return (
    <div className={classes.popup}>
      <div>{props.children}</div>
      <IoMdClose onClick={() => props.onClose(false)} />
    </div>
  );
}

export default Popup;
