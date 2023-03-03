import React from 'react';
import TourItem from './TourItem';
import {tourList} from 'data/tours';
import classes from './TourCard.module.css';

const TourCard = (props) => {
  return (
    <form className={classes.form_login}>
       <TourItem key={tourList.id}
        stadium={tourList.stadium} 
        city={tourList.city} 
        date={tourList.date} 
        country={tourList.country}
        description={tourList.description}
      />
      <button onClick={props.onClick} className={classes.btn}>
        {" "}
        Buy ticket
      </button>
      <button onClick={props.onClick} className={classes.btn + " " + classes.btn_alt}>
        {" "}
        Cancel
      </button>

  </form>
   
  );
};

export default TourCard;