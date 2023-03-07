import React from 'react';
import { tourList } from 'data/tours';
import classes from './Tour.module.css'
import TourItem from './TourItem';
// import Modal from 'components/Modal';
// import Button from 'components/Button';

const Tour = () => {
  // const [modalActive, setModalActive] = useState(true)
  return (
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
                {/* <Button filled  onClick={()=> setModalActive(true)} > Tickets</Button> */}
                <hr/>
                {/* <Modal active={modalActive} setActive={setModalActive}></Modal> */}
                </li>
              )
          })}
    </ul>
  );
};

export default Tour;