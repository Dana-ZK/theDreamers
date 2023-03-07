import axios from 'axios';
import React, { useState } from 'react';
import classes from './Video.module.css'

const Video = () => {
  const [video, setVideo] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/albums/1/photos?_limit=16"
    );

    setVideo(response.data);
  };

  return (
    <div className={classes.videoContainer} onMouseMove={fetchData}>
        {video &&
          video.map((v) => {
            return (
              <div className={classes.video} key={v.id}>
                <h3 className={classes.videoTitle}>{v.title}</h3>
                <img src={v.url} alt={v.title} className={classes.videoImage} />
              </div>
            );
          })}
    </div>
  );
  // return (
  //   <section className={classes.videoContainer}>
  //     Video
  //   </section>
  // );
};

export default Video;