import React, {useContext} from "react";
import VideoItem from "./VideoItem";
import {AppContext} from '../appContext';

const VideoList = () => {
  const { videos } = useContext(AppContext);

  return (
    <div className="container">
    <div className="gallery-container">
      {videos.map(video => <VideoItem video={video} key={video.id} /> )}
    </div>
    </div>
  );
};

export default VideoList;
