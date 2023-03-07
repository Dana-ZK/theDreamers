import Button from 'components/Button';
import React, { useState } from 'react';
import classes from './StoreItem.module.css'
import StoreCard from './StoreCard'

const StoreItem = (props) => {
  const [cartOpen, setCartOpen]= useState(false);
  return (
    <div className={classes.container}>
      <h3 className={classes.title}>{props.name}</h3>
      <i className={classes.category}>{props.category}</i>
      {/* <span className={classes.text}>{props.description}</span> */}
      <strong className={classes.priceBlock}> $ {props.price}</strong>
      <Button filled onClick={()=>{setCartOpen(cartOpen)}}> BUY</Button>
      {cartOpen && <StoreCard/>}
    </div>
  );
};

export default StoreItem;