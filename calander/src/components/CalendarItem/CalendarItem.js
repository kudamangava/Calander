import React from "react";
import "./CalanderItem.css";

const CalendarItem = ({ day, dayOfMonth }) => {
  return (
    <div >
      <div className="item">
        <p className="itemDate">
          {dayOfMonth ? `${dayOfMonth}, ` : ""}
          {day}
        </p>
      </div>
    </div>
  );
};

export default CalendarItem;
