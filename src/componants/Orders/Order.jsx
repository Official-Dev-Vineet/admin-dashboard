import React from "react";
import MainHeader from "../pop-ups/MainHeader";
import "./Order.css";

const Order = () => {
  return (
    <div className="order dashboard">
      <MainHeader title="Order">Order list of this month </MainHeader>
      <main>
        <div className="filter">
          <ul>
            <li>All order </li>
            <li>Dispatch</li>
            <li>Pending</li>
            <li>Completed</li>
          </ul>
          <div className="time">
            <input type="date" id="start" />
            <span>To</span>
            <input type="date"  id="end" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Order;
