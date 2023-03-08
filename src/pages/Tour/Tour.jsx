import React from 'react';
import { tourList } from 'data/tours';
import classes from './Tour.module.css'
import TourItem from './TourItem';

const Tour = () => {
  return (
    <>
    <h2>Live Dates</h2>
    <ul className={classes.tourContainer}>
        {tourList.map((tour)=>{
          let {stadium,city, date, country, id} = tour;
          return(
            <li key={id}>
               <TourItem 
                stadium={stadium} 
                city={city} 
                date={date} 
                country={country}
                />
                <hr/>
                </li>
              )
            })}
    </ul>
    </>
  );
};

export default Tour;