import React from 'react';
import classes from './MainPage.module.css'
import { store } from 'data/store';
import StoreItem from 'pages/Store/StoreItem';
import { tourList } from 'data/tours';
import TourItem from 'pages/Tour/TourItem';


const limitStore = store.slice(0,3)
const limitTour = tourList.slice(0,6)


const MainPage = () => {

  return (
    <main className={classes.main}>
      <div className={classes.tour}>
      <h2>Live Dates</h2>
        {limitTour.map((tour)=>{
          let {stadium,city, date, country, id} = tour;
          return(
            <div key={id}>
               <TourItem 
                stadium={stadium} 
                city={city} 
                date={date} 
                country={country}
                />
                <hr/>
                </div>
              )
            })}
      </div>
      <div className="store">
      <h2>Store</h2>
        <div className={classes.storeBlock}>
        {
          limitStore.map((item) =>{
            let {name, id, description, price, category} = item;
            return(
              <div key={id}>
                <StoreItem
                name ={name}
                description = {description}
                price = {price}
                category = {category}
                />
              </div>
            )
          })
        }
        </div>
      </div>
      <section className={classes.speachSection}>
        <h2>OUR friedns</h2>
        <p>Dear friends and fans,

We want to take a moment to thank you for your incredible support and love. It means the world to us and drives us to keep creating and performing music that we hope you'll enjoy.

If you haven't already, we invite you to give our music a listen. We pour our hearts and souls into every note and lyric, and we believe our songs have the power to uplift, inspire, and connect people across the world.

And if you've already been to one of our concerts, we hope you had an amazing time and felt the energy and passion we bring to the stage. We love performing live and feeding off the energy of our audience, and we can't wait to see you again soon.

We know there's a lot of great music out there, and we feel honored that you've chosen to support us. We promise to keep working hard and growing as artists, and we hope you'll continue to join us on this journey.

Thank you from the bottom of our hearts.

With love and gratitude,

<br />
<strong> THE DREAMERS</strong></p>
      </section>

  </main>
  );
};

export default MainPage;