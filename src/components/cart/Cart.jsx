import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaCartArrowDown } from 'react-icons/fa';
import classes from './Cart.module.css';
import CartMenu from './CartMenu';
import { calcTotalPrice } from 'components/utils';
import CountItemsInCart from './coutItemCircle/CountItemsInCart';

function Cart() {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
  const items = useSelector(state => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);

  return (

    <div className={classes.cart_block}  onClick = {()=> setIsCartMenuVisible(!isCartMenuVisible)}>
      <CountItemsInCart count = {items.length}/>
      <FaCartArrowDown 
      size={16}
     
        />
        {
          totalPrice > 0 ? (
            <span className={classes.cart_price}> {totalPrice.toFixed(2)} $</span>
          ) : null
        }
        {isCartMenuVisible && <CartMenu items={items} onClick={()=>{}}/>}
    </div>
  );

}

export default Cart;