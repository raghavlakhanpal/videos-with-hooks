import React from "react";

//importing components

//class based component
class SearchBar extends React.Component {
  //state to store and update search value given by user
  state = { searchValue: "" };

  // handler fuction to take input from user and update it to state
  onInputChange = (event) => {
    this.setState({ searchValue: event.target.value });
  };
  // handler fuction to update form when user clicks enter
  onFormSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label className="ui label"> Video Search</label>
            <input
              className="ui input"
              type="text"
              value={this.state.searchValue}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
