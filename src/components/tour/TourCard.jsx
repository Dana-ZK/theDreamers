import React from 'react';
import { useSelector } from 'react-redux';
import TourItem from './tourItem/TourItem';
import classes from './TourCard.module.css';
import { Link } from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs';

const TourCard = () => {
  const item = useSelector(state => state.itemCard.currentItemCard)
  if(!item) return null;
  return (
    <>
    <Link to='/tour' className={classes.link}><BsArrowLeftCircle size={25}/> Go back</Link>
    <div className={classes.itemCardContainer}>
    <TourItem 
    className={classes.itemCard}
        name={item.name} 
        city={item.city} 
        date={item.date} 
        country={item.country}
        description={item.description}
        price={item.price}
        />
        </div>
    </>
   
  );
};

export default TourCard;