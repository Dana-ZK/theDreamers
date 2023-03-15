import React from 'react';
import classes from './CountItemsInCart.module.css'

const CountItemsInCart = ({count = 0}) => {
  return count > 0 ? (
    <div className={classes.items_in_cart }>
      {count}
    </div>
  ) : null;
};

export default CountItemsInCart;