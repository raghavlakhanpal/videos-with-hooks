//importing libraries
import React, { useState } from "react";

//Functionalcomponent
const SearchBar = ({ onFormSubmit }) => {
  //state to store and update search value given by user
  const [searchValue, setSearchValue] = useState("");

  // handler fuction to update form when user clicks enter
  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(searchValue);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label className="ui label"> Video Search</label>
          <input
            className="ui input"
            type="text"
            value={searchValue}
            // handler fuction to take input from user and update it to state
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
