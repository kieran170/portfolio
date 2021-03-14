import React from "react";
import video1 from "../images/Simulator - iPhone 12 Pro Max – 14.4.mp4";

export default function Video() {
  return (
    <div>
      <video
        src={video1}
        width="600"
        height="600"
        controls="controls"
        autoplay="true"
      />
    </div>
  );
}
