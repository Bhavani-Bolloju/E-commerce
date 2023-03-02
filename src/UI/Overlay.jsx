import React from "react";
import classes from "./Overlay.module.scss";

function Overlay({ onClose }) {
  return (
    <div
      onClick={() => {
        onClose(false);
      }}
      className={classes.overlay}
    >
      bg
    </div>
  );
}

export default Overlay;
