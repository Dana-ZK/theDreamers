import Button from 'components/Button';
import React from 'react';
import classes from './StoreItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemFromCart, setItemInCart } from 'redux/cart/reducer';


const StoreItem = (props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === props.id);

  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(props.id));
    } else {
      dispatch(setItemInCart(props));
    }
  };
  return (
    <div className={classes.container} id = {props.id}>
      <h3 className={classes.title}>{props.name}</h3>
      <i className={classes.category}>{props.category}</i>
      <span className={classes.text}>{props.description}</span>
      <strong className={classes.priceBlock}> $ {props.price}</strong>
      <Button 
      filled
      onClick={handleClick}
      > {isItemInCart ? "DON'T WANT TO BUY" : "BUY"}
      </Button>
    </div>
  );
};

export default StoreItem;

