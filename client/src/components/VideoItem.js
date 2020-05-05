import React, {useContext} from "react";
import { Link } from "react-router-dom";

const VideoItem = ({video}) => {

  return (
      <div className="gallery">
        {/* <Link to='/detail' onClick={() => playVideo(video)}> */}
        <Link to={{
          pathname: '/detail',
          state: {
            selectedVideo: video
          }
        }} >
          <img src={video.thumb} alt="" />
        </Link>
  <div className="desc">{video.title}</div>
      </div>
  );
};

export default VideoItem;
