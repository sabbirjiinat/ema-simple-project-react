import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart, handleClearCart, children }) => {
  // const { cart } = props;
  // console.log(cart);
  // const handleClearCart = props.handleClearCart;

  // console.log(props);

  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    product.quantity = product.quantity || 1;
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping * product.quantity;
    quantity = quantity + product.quantity;
  }

  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;
  return (
    <div className="cart-container">
      <h5 className="cart-name">Order Summary</h5>
      <div className="cart-info">
        <p>Selected Item:{quantity} </p>
        <p>Total Price: {totalPrice}</p>
        <p>Shipping Charge:{totalShipping}</p>
        <p>Tax:{tax.toFixed(2)}</p>
        <h6>Grand Total:{grandTotal.toFixed(2)}</h6>
        <button onClick={handleClearCart} className="clear-cart-btn">
          <span>Clear Cart</span>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Cart;
