import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { deleteItemFromCart, setItemInCart } from 'redux/cart/reducer';
import { setCurrentItemCard } from 'redux/itemCard/reducer';
import Button from 'components/Button';
import classes from './StoreItem.module.css';


const StoreItem = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === props.id);
  
  const handleOpenCard = ()=>{
    dispatch(setCurrentItemCard(props));
    navigate(`/store/${props.name}`)
  }
  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(props.id));
    } else {
      dispatch(setItemInCart(props));
    }
  };

  return (
    <div className={classes.container} id = {props.id} onClick={handleOpenCard}>
      <h3 className={classes.title}>{props.name}</h3>
      <i className={classes.category}>{props.category}</i>
      <span className={classes.text}>{props.description}</span>
      <strong className={classes.priceBlock}> $ {props.price}</strong>
      <Button 
      filled
      onClick={handleAddToCart}
      > {isItemInCart ? "DON'T WANT TO BUY" : "BUY"}
      </Button>
    </div>
  );
};

export default StoreItem;

