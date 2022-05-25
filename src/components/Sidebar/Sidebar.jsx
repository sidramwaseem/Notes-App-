import React from "react";
import "./Sidebar.css";
import plusIcon from "../../assets/plus-icon.png";

function Sidebar(props) {
  const colours = ["#fe9b72", "#fec971", "#00d4fd", "#b693fd", "#e4ee91"];

  const [listOpen, setListOpen] = React.useState(false);

  function toggleList(){
    setListOpen(prevState => !prevState)
  }


  return (
    <div className="sidebar">
      <img src={plusIcon} alt="Plus-Icon" onClick={toggleList} />
      <ul className={`sidebar_list ${listOpen?"sidebar_list_active":""}`}>
        {colours.map((color, index) => (
          <li
            key={index}
            className="sidebar_list_item"
            style={{ backgroundColor: color }}
            onClick={()=>props.addNote(color)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
