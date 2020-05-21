import React, {useContext} from "react";
import VideoItem from "./VideoItem";
import {AppContext} from '../appContext';

const VideoList = () => {
  const { videos } = useContext(AppContext);

  return (
    <div className="container mt-4 mb-4">
    {/* <div className=""> */}
    {/* <div className="row m-5"> */}
    <div className="row">
      {videos.map(video => <VideoItem video={video} key={video.id} /> )}
    </div>
    </div>
  );
};

export default VideoList;
