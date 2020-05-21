import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const VideoItem = ({ video }) => {
  return (
    <div style={{ padding: "1rem" }} className="col-sm-6 col-md-6 col-lg-4">
      <div
        style={{
          backgroundColor: "white",
          boxShadow: "1px 1px 5px rgba(0,0,0,0.25)",
          padding: "5px",
          borderRadius: "4px",
          border: "1px solid rgba(0,0,0,0.25)",
        }}
      >
        {/* <Link to='/detail' onClick={() => playVideo(video)}> */}
        <img
          style={{ width: "100%", borderRadius: "4px" }}
          src={video.thumb}
          alt=""
        />
        {/* <div
          style={{
            margin: "1rem 0.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className="desc"
        > */}
        <div className="row"  style={{
            margin: "0.5rem 0rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <div className="col-12 pl-0 mb-2">
            {/* <strong style={{ fontSize: "0.9rem" }}> {video.title}</strong>{" "} */}
            <strong style={{ fontSize: "0.9rem" }}>
                <h6 style={{marginBottom: '0'}}>{video.title}</h6>
            </strong>
          </div>
          <div className="col-12 pl-0">
            <Link
              to={{
                pathname: "/detail",
                state: {
                  selectedVideo: video,
                },
              }}
            >
              <Button style={{ padding: "1px 5px", marginLeft: 'auto', display: 'block' }} size="sm">
                Watch
              </Button>
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
