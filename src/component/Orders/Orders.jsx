import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { useState } from 'react';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
  const savedCart = useLoaderData()
  const [carts,setCarts] = useState(savedCart)
    // console.log(carts);
  const handleDeleteItem = (id) => {
    const remainCard = carts.filter(product => product.id != id)
    // console.log(remainCard);
    setCarts(remainCard)
    removeFromDb(id)
  }
    return (
        <div className="shop-container">
        <div className="cart-container">
                {carts.map(cart => <ReviewItem
                    key={cart.id}
                  cart={cart}
                  handleDeleteItem={handleDeleteItem}
                ></ReviewItem>)}
        </div>
        <div className="order-container">
          <Cart cart={carts}></Cart>
        </div>
      </div>
    );
};

export default Orders;