//importing libraries
import React from "react";

//importing components
import SearchBar from "./SearchBar";

//class based component
class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <SearchBar />
      </div>
    );
  }
}
export default App;
