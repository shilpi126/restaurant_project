import React, { useState } from 'react'
import CartContext from './cart-context';

const CartProvider = (props) => {
  const [cartItem, setCartItem]  = useState([])

    const addItemToCartHandler = (item) => {
    
      setCartItem([...cartItem,item])
     
    };
    

    const removeItemFromCartHandler = (id) => {};
    
    const cartContext = {
        items:cartItem,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler,

    }


  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider >
  )
}

export default CartProvider