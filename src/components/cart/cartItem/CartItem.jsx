import React from 'react';
import { useDispatch } from 'react-redux';
import {MdOutlineDeleteForever} from 'react-icons/md'
import { deleteItemFromCart } from 'redux/cart/reducer';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteItemFromCart(props.id));
  };

  return (
    <div className={classes.cart_item}>
      <span>{props.name} </span>
      <div className={classes.cart_item__price}>
        <span>{props.price} $</span>
        <MdOutlineDeleteForever
          size={25}
          className={classes.cart_item__deleteIcon}
          onClick={handleDeleteClick}
        />
      </div>
    </div>
  );
};

export default CartItem;