import React, { useEffect } from "react";
import { image, user } from "../../Constants/constants";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import DashboardSharpIcon from "@mui/icons-material/DashboardSharp";
import PermIdentitySharpIcon from "@mui/icons-material/PermIdentitySharp";
import ReceiptLongSharpIcon from "@mui/icons-material/ReceiptLongSharp";
import InsightsSharpIcon from "@mui/icons-material/InsightsSharp";
import MailOutlineSharpIcon from "@mui/icons-material/MailOutlineSharp";
import InventorySharpIcon from "@mui/icons-material/InventorySharp";
import ReportGmailerrorredSharpIcon from "@mui/icons-material/ReportGmailerrorredSharp";
import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import { msg } from "../../Constants/constants";
const SideBar = () => {
  return (
    <aside className="">
      <div className="top">
        <picture>
          <img src={image} alt="user" />
        </picture>
        <h2>{user}</h2>
      </div>
      <div className="middle">
        <div className="input-field">
          <label>
            <SearchSharpIcon />
          </label>
          <input type="text" name="friend" placeholder="Search Friend" />
        </div>
        <div className="menu-links">
          <ul>
            <li>
              <NavLink to="dashboard">
                <span className="icon">{<DashboardSharpIcon />}</span>
                <span className="link">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Customers">
                <span className="icon">{<PermIdentitySharpIcon />}</span>{" "}
                <span className="link">Customers</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Orders">
                <span className="icon">{<ReceiptLongSharpIcon />}</span>
                <span className="link">Orders</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Analytics">
                <span className="icon">{<InsightsSharpIcon />}</span>
                <span className="link">Analytics</span>
              </NavLink>
            </li>
            <li title={`you've ${msg} messages`}>
              <NavLink to="/Messages">
                <span className="icon">{<MailOutlineSharpIcon />}</span>
                <span className="link">Messages</span>{" "}
                <span className="msg">{msg}</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Products">
                <span className="icon">{<InventorySharpIcon />}</span>
                <span className="link">Products</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Reports">
                <span className="icon">{<ReportGmailerrorredSharpIcon />}</span>
                <span className="link">Reports</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Settings">
                <span className="icon">{<SettingsSharpIcon />}</span>
                <span className="link">Settings</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Add-account">
                <span className="icon">{<AddSharpIcon />}</span>
                <span className="link">Add Account</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="last">
        <div className="logout">
          <NavLink to="/Logout">
            <span className="link">Logout</span>
            <span className="icon">{<LogoutSharpIcon />}</span>
          </NavLink>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
