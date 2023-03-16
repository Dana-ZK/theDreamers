import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from 'components/cart/cartItem/CartItem';
import { calcTotalPrice } from 'components/utils';
import classes from './CartPage.module.css';


const CartPage = () => {
  const items = useSelector(state =>state.cart.itemsInCart);

   if(items.length <1){
    return <h1 className={classes.cart_empty}>Here is empty yet</h1>
   }
  return (
    <div className={classes.cart_block}>
      <h1>Your order: </h1>
      <div  className={classes.cart_items}>
        {
          items.map((item) => {
            let {name,id,price} = item;
            return(
          <CartItem 
          name={name}
          price = {price}
          id={id}
          />)})
        }
      </div>
      <div className={classes.cart_price}>
        <span>Total price: </span>
        <span> <strong>{calcTotalPrice(items).toFixed(2)}</strong> $</span>
      </div>
    </div>
  );
};

export default CartPage;