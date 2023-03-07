import React from "react";
import classes from "./Singup.module.scss";

function SignupPage() {
  return (
    <div className={classes.signup}>
      <form>
        <input type="text" placeholder="fullname" />
        <input type="email" placeholder="Email" />
        <input type="test" placeholder="password" />
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignupPage;
