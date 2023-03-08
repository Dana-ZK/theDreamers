import React, { useState } from 'react';
import classes from './Music.module.css'
import { FaYoutube,FaSpotify,FaApple,FaSoundcloud,FaPlay} from 'react-icons/fa'
import axios from 'axios';
import { musicUrl } from 'data/dataApi';


const Music = () => {
  const [music, setMusic] = useState(null);
  const fetchData = async ()=>{
    const response = await axios.get(musicUrl);
    setMusic(response.data);
  }

  return (
    <section className={classes.musicContainer} onMouseMove={fetchData}>
    <div className={classes.social}>
      <div className={classes.socialItemContainer}> 
        <FaYoutube className={classes.socialItem}/> 
        <a href='/' className={classes.socialItemLink}>Youtube</a>
      </div>
        <div className={classes.socialItemContainer}>
          <FaSpotify className={classes.socialItem}></FaSpotify>
          <a href='/' className={classes.socialItemLink}>Spotify</a>
          </div>
        <div className={classes.socialItemContainer}>
          <FaApple className={classes.socialItem}> </FaApple>
          <a href='/' className={classes.socialItemLink}>IMusic</a>
          </div>
        <div className={classes.socialItemContainer}>
          <FaSoundcloud className={classes.socialItem}></FaSoundcloud>
          <a href='/' className={classes.socialItemLink}>SoundCloud</a>
          </div>
    </div>
    <div >
    {music &&
          music.map((m) => {
            return (
              <div key={m.id} className={classes.listOfMusic}>
                <FaPlay/>
                <strong className={classes.musicTitle}>Song:  {m.name}</strong>
                <p className={classes.musicText}>About:  {m.description}</p>
                
              </div>
            );
          })}
    </div>
    </section>
  );
};

export default Music;