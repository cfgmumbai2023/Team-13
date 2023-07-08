import React from "react";

import './Video.css';

function Video(props) {
  return (
    <div className="videoContainer">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/j284YeATTAI"
        title="YouTube video player"
        // src={props.link}
        // title={props.title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Video;
