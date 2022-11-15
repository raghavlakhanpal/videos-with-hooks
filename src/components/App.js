//importing libraries
import React from "react";
//importing components
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

//importing APIs
import youtube from "../APIs/youtube";

//class based component
class App extends React.Component {
  state = { videos: [], selectedVideo: null };

componentDidMount(){
    this.onSearchSubmit('learning react');
}

  //method to get callback from child searchbar and obtain searchvalue
  onSearchSubmit = async (value) => {
    //collecting the response data using async await on axios get request
    const response = await youtube.get("search", { params: { q: value } });
    //updating state with the new array of videos
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  //Method to get selected video by passing it as callback to child components
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  //---------------------------RENDER METHOD--------------------------------
  render() {
    return (
      <React.StrictMode>
        <div className="ui container">
          <SearchBar onFormSubmit={this.onSearchSubmit} />
          <div className="ui grid">
            <div className="ui row">
              <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo} />
              </div>
              <div className="five wide column">
                <VideoList
                  onVideoSelect={this.onVideoSelect}
                  videos={this.state.videos}
                />
              </div>
            </div>
          </div>
        </div>
      </React.StrictMode>
    );
  }
}
export default App;
