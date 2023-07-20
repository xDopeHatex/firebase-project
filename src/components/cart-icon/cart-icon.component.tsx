import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext, useState } from "react";
import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
  const { isDropdownOpen, setIsDropdownOpen } = useContext(CartContext);

  const dropdownHandler = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="cart-icon-container" onClick={dropdownHandler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
