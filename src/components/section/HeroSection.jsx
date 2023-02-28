import React from "react";
import classes from "./HeroSection.module.scss";

import shoppingLogo from "../images/shopping-cart-person.svg";

function HeroSection() {
  return (
    <div className={classes.heroSection}>
      <div className={classes.container}>
        <div>
          <h1>Everything you need at one place</h1>
          <p>shop now</p>
        </div>
        {/* <img src={logo} alt="cart" /> */}
        <img src={shoppingLogo} alt="cart" />
      </div>
    </div>
  );
}

export default HeroSection;
