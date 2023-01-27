import React from "react";
import "./index.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
const MainHeader = ({ title, children }) => {
  return (
    <div className="header">
      <h2 className="title">{title}</h2>
      <p>{children}</p>
      <button onClick={() => window.history.back()}>
        {<KeyboardBackspaceIcon />}
      </button>
      <button className="forward" onClick={() => window.history.back()}>
        {<KeyboardBackspaceIcon />}
      </button>
    </div>
  );
};

export default MainHeader;
