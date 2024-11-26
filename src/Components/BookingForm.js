import React, { useState } from "react";
import "./BookingForm.css"; 

const BookingForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [time, setTime] = useState("10:00");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, time });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter Your Details</h2>
      
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        Time:
        <select value={time} onChange={(e) => setTime(e.target.value)} required>
          <option value="10:00">10:00 AM</option>
          <option value="11:00">11:00 AM</option>
          <option value="12:00">12:00 PM</option>
          <option value="01:00">01:00 PM</option>
          <option value="02:00">02:00 PM</option>
          <option value="03:00">03:00 PM</option>
          <option value="04:00">04:00 PM</option>
        </select>
      </label>
      <br />

      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;
