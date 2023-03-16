import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { FaCartArrowDown } from 'react-icons/fa';
import CartMenu from './CartMenu';
import { calcTotalPrice } from 'components/utils';
import CountItemsInCart from './coutItemCircle/CountItemsInCart';
import classes from './Cart.module.css';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
  const items = useSelector(state => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  const navigate = useNavigate();
  
  const handleOpenCartPage = useCallback(()=>{
    setIsCartMenuVisible(false);
    navigate('/order');
  }, [navigate])

  return (

    <div className={classes.cart_block}  onClick = {()=> setIsCartMenuVisible(!isCartMenuVisible)}>
      <CountItemsInCart count = {items.length}/>
      <FaCartArrowDown 
      size={16}
      onClick={handleOpenCartPage}
        />
        {
          totalPrice > 0 ? (
            <strong className={classes.cart_price}> {totalPrice.toFixed(2)} $</strong>
          ) : null
        }
        {isCartMenuVisible && <CartMenu items={items} onClick={handleOpenCartPage}/>}
    </div>
  );

}

export default Cart;