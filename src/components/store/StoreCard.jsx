import React from 'react';
import {BsArrowLeftCircle} from 'react-icons/bs'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import StoreItem from './storeItem/StoreItem';
import classes from './StoreCard.module.css'


const StoreCard = () => {
  const item = useSelector(state => state.itemCard.currentItemCard)
  if(!item) return null;
  return (
    <>
    <Link to='/store' className={classes.link}><BsArrowLeftCircle size={25}/> Go back</Link>
    <div className={classes.itemCardContainer}>
      <StoreItem
      className={classes.itemCard}
       id={item.id}
       name={item.name}
       description={item.description}
       price={item.price}
       category={item.category}

        />
    </div>
    </>
  );
};

export default StoreCard;