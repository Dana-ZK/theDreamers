import React from 'react';
import classes from './VideoItem.module.css'

const VideoItem = (props) => {
  return (
    <div className={classes.video} key={props.id}>
      <h3 className={classes.videoTitle}>{props.title}</h3>
      <img src={props.url} alt={props.title} className={classes.videoImage} />
    </div>
  );
};

export default VideoItem;