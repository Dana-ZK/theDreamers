import Button from 'components/Button';
import React from 'react';
import classes from './StoreItem.module.css'

const StoreItem = (props) => {
  return (
    <div className={classes.container}>
      <h3 className={classes.title}>{props.name}</h3>
      <i className={classes.category}>{props.category}</i>
      <span className={classes.text}>{props.description}</span>
      <strong className={classes.priceBlock}> $ {props.price}</strong>
      <Button filled> Add to cart </Button>

    </div>
  );
};

export default StoreItem;