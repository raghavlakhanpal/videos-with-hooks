import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>loading..</div>;
  }
  const vedioSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={vedioSrc}></iframe>
      </div>
      <div className="ui segment">
        <h4 className="heading">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
