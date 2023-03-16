import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteItemFromCart, setItemInCart } from 'redux/cart/reducer';
import { setCurrentItemCard } from 'redux/itemCard/reducer';
import Button from 'components/Button';
import classes from './TourItem.module.css'


const TourItem = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === props.id);

  const handleOpenCard = ()=>{
    dispatch(setCurrentItemCard(props));
    navigate(`/tour/${props.name}`)
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
    <div className={classes.tourList} id={props.id} onClick={handleOpenCard}>
        <i className={classes.tourDate}>{props.date}</i>
        <strong className={classes.tourName}>{props.name}</strong>
        <p className={classes.tourCountry}>{props.country}</p>
        <p className={classes.tourCity}>{props.city}</p>
        <span>{props.description}</span>
        <span className={classes.tourPrice}>{props.price} $</span>
        <Button 
      filled
      onClick={handleAddToCart}
      > {isItemInCart ? "DON'T WANT" : "TICKET"}
      </Button>
        <Button outlined> VIP</Button>
    </div>
  );
};

export default TourItem;