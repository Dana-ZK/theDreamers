import Button from 'components/Button';
import Modal from 'components/Modal';
import React, { useState } from 'react';
import classes from './TourItem.module.css'


const TourItem = (props) => {

  const [modalActive, setModalActive] = useState(false)

  return (
    <>
    <div className={classes.tourList}>
        <i className={classes.tourDate}>{props.date}</i>
        <strong className={classes.tourName}>{props.stadium}</strong>
        <p className={classes.tourCountry}>{props.country}</p>
        <p className={classes.tourCity}>{props.city}</p>
        <span>{props.description}</span>
        <Button filled  onClick={()=> setModalActive(true)} > Tickets</Button>
        <Button outlined > VIP</Button>
        {modalActive && <Modal active={modalActive} setActive={setModalActive}></Modal>}
    </div>
          </>
  );
};

export default TourItem;