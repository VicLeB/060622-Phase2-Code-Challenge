import React from "react";

function SearchBar({searchPlaneteer, handleSearch}) {

  function handleOnChange(event){
    handleSearch(event)
  }
  return (
    <div className="search">
      <input type="text"
      className="searchTerm"
      value={searchPlaneteer}
      onChange={handleOnChange}
      placeholder="Who would you like to search for?"
      />
      {/* For the advanced deliverables: add a checkbox to allow sorting the planeteer */}
    </div>
  );
}

export default SearchBar;
