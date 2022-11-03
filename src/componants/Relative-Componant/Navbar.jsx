import React, { useState } from "react";
import TopPopup from "../pop-ups/TopPopup";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import LogoutIcon from "@mui/icons-material/Logout";
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
const Navbar = () => {
  const [user, setUser] = useState("Vineet");
  let [image, setImage] = useState(
    "https://www.tripadapublicschool.in/public/uploads/alumni/1576069050.jpg"
  );
  const [msgCount, setMsgCount] = useState(5);
  function changeImage(event) {
    console.log("profile image is :",event.currentTarget.src)
    setImage=prompt('Enter your profile image address');
    event.currentTarget.src=setImage;
    if (setImage){
      <TopPopup msg="profile changed successfully" icon={<CheckCircleOutlineSharpIcon />} />
    }

  }
  return (
    <>
      <nav>
        <div className="left">
          <div className="logo">
            <h1>{user[0]}</h1>
          </div>
          <div className="title">
            <h1>Admin Dashboard</h1>
          </div>
          <div className="icons">
            <span className="icon">{<MenuIcon />}</span>
            <span className="icon">{<FullscreenIcon />}</span>
          </div>
        </div>
        <div className="right">
          <div className="icons">
            <span className="icon">
              {<NotificationsNoneIcon />}
              <span className="msg-count">{msgCount}</span>
            </span>
          </div>
          <div className="user-profile">
            <picture>
              <img src={image} alt={user} onClick={(e) => changeImage(e)}/>
            </picture>
            <h2>{user}</h2>
          </div>
          <div className="icons">
            <span className="icon">{<KeyboardArrowDownIcon />}</span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
