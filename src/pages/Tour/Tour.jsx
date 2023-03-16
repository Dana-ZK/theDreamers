import React from 'react';
import { tourList } from 'data/tours';
import TourItem from 'components/tour/tourItem/TourItem';
import classes from './Tour.module.css'

const Tour = () => {
  return (
    <>
    <h2>Live Dates</h2>
    <ul className={classes.tourContainer}>
        {tourList.map((tour)=>{
          let {name,city, date, country, id,price} = tour;
          return(
            <li key={id}>
               <TourItem 
               id={id}
                name={name} 
                city={city} 
                date={date} 
                country={country}
                price={price}
                />
                </li>
              )
            })}
    </ul>
    </>
  );
};

export default Tour;