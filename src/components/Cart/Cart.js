import React, { useContext } from 'react'
import classes from "./Cart.module.css"
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'

const Cart = (props) => {
    const ctx = useContext(CartContext)
    

    const handleRemoveQuantity = (event) => {
        ctx.removeItem(event.target.id)
    }
     

    const cartItem = (
        <ul className={classes["cart-items"]}>
            {ctx.items.map((item) => {
                return (

                <li className={classes.list} key={item.id}>
            
                    <div className={classes.first}>
                    <h3 className={classes.name}>{item.name}</h3>
                    
                    <div className={classes.detail}>
                    <span className={classes.price}>{item.price}</span>
                    <span className={classes.quantity}>{item.quantity}</span>
                    </div>
                    </div>

                    <div className={classes.btn}>
                    <button type='click' onClick={handleRemoveQuantity} id={item.id}>-</button>
                    <button>+</button>
                    </div>
                
                
                </li>
                )
            })}
        </ul>
    )




  return (
    <Modal onClose={props.onClose}>
    
        {cartItem}
    <div className={classes.total}>
        <span>Total Amount</span>
        <span>${ctx.totalAmount.toFixed(2)}</span>
    </div>
    <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
    </div>
    </Modal>

  )
}

export default Cart