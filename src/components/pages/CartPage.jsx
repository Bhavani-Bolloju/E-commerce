import React from "react";
import { Outlet, Link } from "react-router-dom";

function CartPage() {
  return (
    <div className="cartPage">
      <div className="cart-headings">
        <Link to="cartItems">Cart Items</Link>
        <Link to="savedItems">Saved Items</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default CartPage;
