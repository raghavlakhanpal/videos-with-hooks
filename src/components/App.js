//importing libraries
import React, { useState, useEffect } from "react";
//importing components
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

//importing custom Hooks
import useVideos from "../hooks/useVideos";

//functional component

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  //using custom hook
  const [videos, search] = useVideos("Learn React");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  //-------------------Return Statement---------------------------
  return (
    <React.StrictMode>
      <div className="ui container">
        <SearchBar onFormSubmit={search} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              {/*Method to get selected video by passing it as callback to child components */}
              <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
            </div>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default App;
