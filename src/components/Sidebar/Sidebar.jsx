import React from "react";
import "./Sidebar.css";
import plusIcon from "../../assets/plus-icon.png";

function Sidebar() {
  const colours = ["#fe9b72", "#fec971", "#00d4fd", "#b693fd", "#e4ee91"];

  return (
    <div className="sidebar">
      <img src={plusIcon} alt="Plus-Icon" />
      <ul className="sidebar_list">
        {colours.map((item, index) => (
          <li
            key={index}
            className="sidebar_list_item"
            style={{ backgroundColor: item }}
          />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
