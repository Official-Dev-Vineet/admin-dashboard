import React, { useState } from "react";
import { Link } from "react-router-dom";
import TopPopup from "../pop-ups/TopPopup";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import LogoutIcon from "@mui/icons-material/Logout";
import CheckCircleOutlineSharpIcon from "@mui/icons-material/CheckCircleOutlineSharp";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
const Navbar = () => {
  document.addEventListener("keyup", changeScreen);
  function changeScreen(e) {
    var keyCode = e.keyCode;
    return keyCode === 70 ? toggleFullScreen() : "";
  }
  const [user, setUser] = useState("Vineet");
  let [image, setImage] = useState(
    "https://www.tripadapublicschool.in/public/uploads/alumni/1576069050.jpg"
  );
  const [msgCount, setMsgCount] = useState(5);
  let [isShow, setIsShow] = useState(false);
  function toggleFullScreen() {
    if (
      (document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)
    ) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
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
            <span className="icon" title="menu">
              {<MenuIcon />}
            </span>
            <span
              title="Press F"
              className="icon"
              onClick={() => toggleFullScreen()}
            >
              {<FullscreenIcon />}
            </span>
          </div>
        </div>
        <div className="right">
          <div className="icons">
            <span className="icon" title={`${msgCount} notification`}>
              {<NotificationsNoneIcon />}
              <span className="msg-count">{msgCount}</span>
            </span>
          </div>
          <div className="user-profile">
            <picture>
              <img src={image} alt={user} />
            </picture>
            <h2>{user}</h2>
          </div>
          <div className="icons toggle">
            <span className="icon" onClick={() => setIsShow = !isShow}>
              {<KeyboardArrowDownIcon />}
            </span>
          </div>
          {
            isShow && <div className="controller-menu">
            <ul className="list-1">
              <li>
                <Link to="/editProfile">Edit Profile</Link>
              </li>
              <li>
                <Link to="/logOut">
                  Logout <span className="icon">{<LogoutIcon />}</span>
                </Link>
              </li>
            </ul>
          </div>
          }
        </div>
      </nav>
    </>
  );
};

export default Navbar;
