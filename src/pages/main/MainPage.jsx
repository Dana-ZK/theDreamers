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
          <div>card</div>
          <div>card</div>
          <div>card</div>
        </div>
      </div>
      <div className="music">
      <h2>music</h2>
        <div className="social">
          <ul>
            <li>yt</li>
            <li>spotify</li>
            <li>imusic</li>
          </ul>
        </div>
        <div className="music">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
      </div>
      <div className="video">
      <h2>Videos</h2>
        <div>v1</div>
        <div>v2</div>
        <div>v3</div>
      </div>


  </main>
  );
};

export default MainPage;