import axios from 'axios';
import { videoUrl } from 'data/dataApi';
import React, { useState } from 'react';
import classes from './Video.module.css'
import VideoItem from './VideoItem';

const Video = () => {
  const [video, setVideo] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(videoUrl)
    setVideo(response.data);
  };

  return (
    <div className={classes.videoContainer} onMouseMove={fetchData}>
        {video &&
          video.map((v) => {
            return (
              <VideoItem
              id={v.id}
              title = {v.title}
              url = {v.url}
              />
            );
          })}
    </div>
  );
};

export default Video;