import React, { useState } from "react";
import "./Message.css";
import MainHeader from "../pop-ups/MainHeader";
import EmailIcon from "@mui/icons-material/Email";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
const Message = () => {
  const [status, setStatus] = useState("online");
  return (
    <div className="dashboard">
      <MainHeader title={"Messenger"}>Client Messages details</MainHeader>
      <main>
        <div className="message-area">
          <div className="message-header">
            <div className="header-text">
              <span className="icon">{<EmailIcon />}</span> <h3>Messenger</h3>
            </div>
            <div className="user-info">
              <span id="status">{status}</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Message;
