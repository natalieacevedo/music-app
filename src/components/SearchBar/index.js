import { useState } from "react";
import "./style.css";
function SearchBar(props) {
  const { nameTyped, setNameTyped, handleInputChange } = props;
  return (
    <div className="search-bar-holder">
      <div className="search-icon-holder">
        <span className="material-icons search">search</span>
      </div>
      <div className="search-space-holder">
        <input
          className="search-space"
          id="fullName"
          type="text"
          autoComplete="off"
          placeholder="Search Song"
          value={nameTyped}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div
        className="clear-icon-holder"
        onClick={() => {
          setNameTyped("");
        }}
      >
        <span className="material-icons clear">clear</span>
      </div>
    </div>
  );
}
export default SearchBar;
