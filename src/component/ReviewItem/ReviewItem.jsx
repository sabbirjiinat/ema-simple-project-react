import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ cart, handleDeleteItem }) => {
  // console.log(cart);
  const { id, name, price, img, quantity } = cart;
  return (
    <div className="review-container">
      <img src={img} alt="" />
      <div className="review-info">
        <p className="review-title">{name}</p>
        <p>
          {" "}
          Price:$ <span className="review-price">{price}</span>
        </p>
        <p>
          Quantity: <span>{quantity}</span>
        </p>
      </div>
      <button onClick={() => handleDeleteItem(id)} className="btn-delete">
        <FontAwesomeIcon className="delete-icon" icon={faTrashAlt} />
      </button>
    </div>
  );
};

export default ReviewItem;
