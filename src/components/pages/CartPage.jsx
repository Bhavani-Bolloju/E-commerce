import React from "react";
import { Outlet, Link } from "react-router-dom";
import { motion } from "framer-motion";

function CartPage() {
  return (
    <motion.div
    
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.5 }}
      transition={{ duration: 0.2 }}
    
      className="cartPage">
      <div className="cart-headings">
        <Link to="cartItems">Cart Items</Link>
        <Link to="savedItems">Saved Items</Link>
      </div>
      <Outlet />
    </motion.div>
  );
}

export default CartPage;
