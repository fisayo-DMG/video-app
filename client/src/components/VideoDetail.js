import React from "react";
import ReactPlayer from "react-player";
import {useLocation} from 'react-router-dom'

// const VideoDetail = ({ location }) => {
//   const video = location.state.selectedVideo;
//   const [url] = location.state.selectedVideo.sources;
//   // console.log(selectedVideo.sources[0])
//   return (
//     <div className="video-container">
//       <div className='video-player'>
//         <ReactPlayer url={url} playing={false} controls={true} width='100%' height='auto'/>
//         <div className="desc">{video.title}</div>
//         <div className="desc">{video.description}</div>
//       </div>
//     </div>
//   );
// };

const VideoDetail = () => {
  const location = useLocation();
  const video = location.state.selectedVideo;
  const [url] = location.state.selectedVideo.sources;
  // console.log(selectedVideo.sources[0])
  return (
    <div className="video-container">
      <div className='video-player'>
        <ReactPlayer url={url} playing={false} controls={true} width='100%' height='auto'/>
        <div className="desc">{video.title}</div>
        <div className="desc">{video.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
