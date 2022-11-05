import React from "react";
import { image, user } from "../../Constants/constants";
import "./Sidebar.css";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
const SideBar = () => {
  return (
    <aside>
      <div className="top">
        <picture>
          <img src={image} alt="user" />
        </picture>
        <h2>{user}</h2>
      </div>
      <div className="middle">
        <div className="input-field">
            <label><SearchSharpIcon /></label>
            <input type="text" name="friend" placeholder='Search Friend'/>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
