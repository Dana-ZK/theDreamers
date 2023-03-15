import Button from 'components/Button';
import { calcTotalPrice } from 'components/utils';
import React from 'react';
import CartItem from './cartItem/CartItem';
import classes from './CartMenu.module.css'

const CartMenu = ({items, onClick}) => {
  return (
    <div className={classes.cart_menu}> 
      <div className={classes.art_menu__totalPrice}>
        {
          items.length > 0 ? items.map((store) => 
          <CartItem 
          key = {store.id}
          price = {store.price}
          name = {store.name}
          />
          ) : "Here is empty yet"
        }
      </div>
      {
        items.length > 0?
        <div className={classes.cart_menu__arrange}>
        <div>
          <span>Total:</span>
          <span>{calcTotalPrice(items).toFixed(2)} $</span>
        </div>
        <Button filled  onClick={onClick}> Order everything</Button>
        </div>
        : null
      }
    </div>
  );
};

export default CartMenu;