import React, { useState } from "react";
import { image, user } from "../../Constants/constants";
import { Link } from "react-router-dom";
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
              <Link to="dashboard">
                <span className="icon">{<DashboardSharpIcon />}</span>Dashboard
              </Link>
            </li>
            <li>
              <Link to="/Customers">
                <span className="icon">{<PermIdentitySharpIcon />}</span>{" "}
                Customers
              </Link>
            </li>
            <li>
              <Link to="/Orders">
                <span className="icon">{<ReceiptLongSharpIcon />}</span>Orders
              </Link>
            </li>
            <li>
              <Link to="/Analytics">
                <span className="icon">{<InsightsSharpIcon />}</span>Analytics
              </Link>
            </li>
            <li title={`you've ${msg} messages`}>
              <Link to="/Messages">
                <span className="icon">{<MailOutlineSharpIcon />}</span>Messages{" "}
                <span className="msg">{msg}</span>
              </Link>
            </li>
            <li>
              <Link to="/Products">
                <span className="icon">{<InventorySharpIcon />}</span>Products
              </Link>
            </li>
            <li>
              <Link to="/Reports">
                <span className="icon">{<ReportGmailerrorredSharpIcon />}</span>
                Reports
              </Link>
            </li>
            <li>
              <Link to="/Settings">
                <span className="icon">{<SettingsSharpIcon />}</span>Settings
              </Link>
            </li>
            <li>
              <Link to="/Add-account">
                <span className="icon">{<AddSharpIcon />}</span>Add Account
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="last">
        <div className="logout">
          <Link to="/Logout">
            Logout
            <span className="icon">{<LogoutSharpIcon />}</span>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
