import React, { useEffect, useState } from 'react'
import CartContext from './cart-context';

const CartProvider = (props) => {
  const [cartItem, setCartItem]  = useState([])
  const [totalAmount, setTotalAmount] = useState(0)

    const addItemToCartHandler = (item) => {
      const existingItemIndex = cartItem.findIndex((cartProduct) => cartProduct.id === item.id);

      if(existingItemIndex !== -1){
        const updateCartItem = cartItem.map((cart, index) => index === existingItemIndex ? {...cart, quantity: +cart.quantity + +item.quantity} : cart)
        setCartItem(updateCartItem)
      }else{
        setCartItem([...cartItem,item])
      }
  
    };

    
    const totalAmountCalculate = () => {
    const totalCalculate = cartItem.reduce((total, item) => {
        return total+ +item.price * +item.quantity;
      },0)
      setTotalAmount(totalCalculate)
      
    }

    useEffect(()=>{
        
      totalAmountCalculate()
    },[cartItem])

    
  

    const removeItemFromCartHandler = (id) => {
      const filteredData = cartItem.map((item)=>{
        if(item.id === id){
          return {...item, quantity: item.quantity - 1}
        }
        return item;
      }).filter(item => item.quantity > 0);

      setCartItem(filteredData);
    };


    
    const cartContext = {
        items:cartItem,
        totalAmount:totalAmount,
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