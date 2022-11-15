import React from "react";

import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  //mapping values of each video to VideoItem Component
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });
  //rendering Component
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
