
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import './Calendar.css';

const CustomCalendar = ({ onDateChange }) => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    onDateChange(selectedDate);
  };

  return (
    <div className="calendar-container">
      <h2>Select a Date</h2>
      <Calendar onChange={handleDateChange} value={date} />
    </div>
  );
};

export default CustomCalendar;
