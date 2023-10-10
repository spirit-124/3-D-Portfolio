import React from "react";
import { BackgroundVideo } from "../assets";

const heroBackgroundVideo = () => {
  return (
    <div className="background-video-container left-0 right-0 w-full h-full overflow-hidden -z-10">
      <video autoPlay muted loop className="background-video  ">
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default heroBackgroundVideo;
