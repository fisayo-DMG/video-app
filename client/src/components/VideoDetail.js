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
    <div className="container mt-3 mb-3">
      <div className='col-sm-12 col-md-10 col-lg-8 m-auto'>
        <div style={{padding: '4px', backgroundColor: 'white', boxShadow: '1px 1px 5px rgba(0,0,0,0.25)', borderRadius: '4px', marginBottom: '0rem'}}>
        <ReactPlayer url={url} playing={false} controls={true} width='100%' height='auto'/>
        <div style={{margin: '0.5rem 0'}} className="desc"><strong> {video.title}</strong></div>
        <div className="desc"><p style={{fontSize: '0.9rem'}}>{video.description}</p></div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
