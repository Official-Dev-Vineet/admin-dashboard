import React from "react";
import "./index.css";
const MainHeader = (title, children) => {
  return (
    <div className="header">
      <h2 className="title">{title}</h2>
      <p>{children}</p>
    </div>
  );
};

export default MainHeader;
