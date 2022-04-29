import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="actions">
          <button className="actionsButtons">Add</button>
          <button className="actionsButtons">Update</button>
        </div>
        <div className="search">
          <button className="searchButton" />
          <div>
            <input
              className="searchInput"
              type="text"
              placeholder="Event, date or user"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
