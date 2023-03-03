import classes from "./HeaderContent.module.css";
  
import React from 'react';
import Slider from "./Slider/Slider";

const HeaderContent = () => {

  return (
    <div className={classes.block_box}>
      <Slider/>
    </div>
  );
}

export default HeaderContent;
