import Music from 'pages/Music/Music';
import Store from 'pages/Store/Store';
import Tour from 'pages/Tour/Tour';
import React from 'react';
import classes from './MainPage.module.css'



const MainPage = () => {

  return (
    <main className={classes.main}>
      <div className={classes.tour}>
        <h2 className={classes.title}>Live Dates</h2> 
        <Tour/>
      </div>
      <div className="store">
      <h2>Store</h2>
        <div>
          <Store/>
        </div>
      </div>
      <div className="music">
      <h2>Music</h2>
      <h4>Listen now on:</h4>
        <div className="music">
          <Music/>
        </div>
      </div>
      <div className="video">
      <h2>Videos</h2>
        
      </div>


  </main>
  );
};

export default MainPage;